import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../common/Input';
import Button from '../common/Button';
import { bookRide, getRideOptions } from '../../api/rideApi';
import { locations } from '../../data/locations';
import useAuth from '../../hooks/useAuth';

const BookingForm = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [rideType, setRideType] = useState('');
  const [rideOptions, setRideOptions] = useState([]);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { user, addRide } = useAuth();

  useEffect(() => {
    getRideOptions()
      .then((data) => {
        setRideOptions(data.options);
        setRideType(data.options[0]?.type || '');
      })
      .catch((error) => console.error('Error fetching ride options:', error));
  }, []);

  const filterSuggestions = (input, setSuggestions) => {
    if (!input) return setSuggestions([]);
    const filtered = locations.filter((loc) =>
      loc.name.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handlePickupChange = (e) => {
    setPickup(e.target.value);
    filterSuggestions(e.target.value, setPickupSuggestions);
  };

  const handleDropoffChange = (e) => {
    setDropoff(e.target.value);
    filterSuggestions(e.target.value, setDropoffSuggestions);
  };

  const selectSuggestion = (suggestion, type) => {
    if (type === 'pickup') {
      setPickup(suggestion.name);
      setPickupSuggestions([]);
    } else {
      setDropoff(suggestion.name);
      setDropoffSuggestions([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert('Please log in to book a ride');
      return navigate('/login');
    }

    if (!pickup || !dropoff || !rideType) {
      return alert('Please enter all details');
    }

    setLoading(true);
    try {
      const response = await bookRide(pickup, dropoff, rideType);
      await addRide(response);
      setPickup('');
      setDropoff('');
      setRideType(rideOptions[0]?.type || '');
      navigate('/book-ride', { state: { booking: response } });
    } catch (error) {
      console.error('Booking error:', error);
      alert('Failed to book ride. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-6 p-6 bg-white shadow-lg rounded-xl space-y-5"
    >
      <div className="relative">
        <Input
          type="text"
          placeholder="Enter pickup location"
          value={pickup}
          onChange={handlePickupChange}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {pickupSuggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-b-md shadow max-h-40 overflow-y-auto">
            {pickupSuggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                onClick={() => selectSuggestion(suggestion, 'pickup')}
                className="p-2 hover:bg-orange-500 hover:text-white cursor-pointer"
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="relative">
        <Input
          type="text"
          placeholder="Enter drop-off location"
          value={dropoff}
          onChange={handleDropoffChange}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {dropoffSuggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-b-md shadow max-h-40 overflow-y-auto">
            {dropoffSuggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                onClick={() => selectSuggestion(suggestion, 'dropoff')}
                className="p-2 hover:bg-orange-500 hover:text-white cursor-pointer"
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Select Ride Type</label>
        <select
          value={rideType}
          onChange={(e) => setRideType(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
        >
          {rideOptions.map((option) => (
            <option key={option.type} value={option.type}>
              {option.type} (₹{option.fare})
            </option>
          ))}
        </select>
      </div>

      <Button
        type="submit"
        disabled={loading || rideOptions.length === 0}
        className={`w-full py-3 rounded text-white font-semibold transition duration-200 ${
          loading || rideOptions.length === 0
            ? 'bg-orange-300 cursor-not-allowed'
            : 'bg-orange-500 hover:bg-orange-600'
        }`}
      >
        {loading ? 'Booking...' : 'Book Now'}
      </Button>
    </form>
  );
};

export default BookingForm;
