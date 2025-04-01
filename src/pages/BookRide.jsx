import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../components/common/Button';
import useAuth from '../hooks/useAuth';
import { getMapData } from '../services/mapService';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix Leaflet default marker icons for React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const BookRide = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { user, updateRideStatus, loading } = useAuth();
  const booking = state?.booking || null;
  const [rideStatus, setRideStatus] = useState(booking?.status || 'Pending');
  const [mapData, setMapData] = useState(null);
  const [mapLoading, setMapLoading] = useState(false);

  useEffect(() => {
    if (booking) {
      setMapLoading(true);
      getMapData(booking.pickup, booking.dropoff, rideStatus)
        .then((data) => setMapData(data))
        .catch((error) => console.error('Error fetching map data:', error))
        .finally(() => setMapLoading(false));
    }
  }, [booking, rideStatus]);

  if (!booking) {
    return (
      <div className="max-w-7xl mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold text-rapidoGray mb-4">No Booking Found</h2>
        <p>Please book a ride from the home page.</p>
        <Button
          onClick={() => navigate('/')}
          className="mt-4 bg-rapidoOrange text-rapidoWhite py-2 px-4 rounded hover:bg-orange-600"
        >
          Go to Home
        </Button>
      </div>
    );
  }

  const { pickup, dropoff, rideType, fare, id } = booking;

  const handleCancel = async () => {
    try {
      await cancelRide(id);
      alert('Ride cancelled successfully!');
      navigate('/');
    } catch (error) {
      alert('Failed to cancel ride. Please try again.');
    }
  };

  const handleStatusUpdate = async (newStatus) => {
    try {
      await updateRideStatus(id, newStatus);
      setRideStatus(newStatus);
      alert(`Ride status updated to ${newStatus}`);
    } catch (error) {
      alert('Failed to update ride status. Please try again.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-rapidoGray mb-4">Ride Confirmation</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-rapidoOrange mb-4">Booking Details</h3>
        <div className="space-y-2">
          <p><span className="font-bold">Ride ID:</span> {id}</p>
          <p><span className="font-bold">Pickup:</span> {pickup}</p>
          <p><span className="font-bold">Drop-off:</span> {dropoff}</p>
          <p><span className="font-bold">Ride Type:</span> {rideType}</p>
          <p><span className="font-bold">Fare:</span> ₹{fare}</p>
          <p>
            <span className="font-bold">Status:</span>{' '}
            <span className={rideStatus === 'Completed' ? 'text-green-600' : 'text-yellow-600'}>
              {rideStatus}
            </span>
          </p>
        </div>

        {/* Map Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-rapidoGray mb-2">Ride Map</h3>
          {mapLoading ? (
            <p className="text-rapidoGray">Loading map...</p>
          ) : mapData ? (
            <div className="bg-gray-100 p-4 rounded-lg">
              <MapContainer
                center={[mapData.pickup.lat, mapData.pickup.lng]}
                zoom={13}
                style={{ height: '300px', width: '100%' }}
                className="rounded"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[mapData.pickup.lat, mapData.pickup.lng]}>
                  <Popup>{mapData.pickup.name}</Popup>
                </Marker>
                <Marker position={[mapData.dropoff.lat, mapData.dropoff.lng]}>
                  <Popup>{mapData.dropoff.name}</Popup>
                </Marker>
              </MapContainer>
              <p className="mt-2 text-rapidoGray"><strong>Route:</strong> {mapData.route}</p>
            </div>
          ) : (
            <p className="text-rapidoGray">Unable to load map data.</p>
          )}
        </div>

        <div className="mt-6 flex space-x-4">
          <Button
            onClick={() => navigate('/profile')}
            className="bg-rapidoOrange text-rapidoWhite py-2 px-4 rounded hover:bg-orange-600"
          >
            View in Profile
          </Button>
          {rideStatus !== 'Completed' && (
            <>
              <Button
                onClick={handleCancel}
                disabled={loading || mapLoading}
                className={`bg-rapidoGray text-rapidoWhite py-2 px-4 rounded hover:bg-gray-600 ${
                  (loading || mapLoading) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Cancelling...' : 'Cancel Ride'}
              </Button>
              <Button
                onClick={() => handleStatusUpdate(rideStatus === 'Pending' ? 'Confirmed' : 'Completed')}
                disabled={loading || mapLoading}
                className={`bg-green-600 text-rapidoWhite py-2 px-4 rounded hover:bg-green-700 ${
                  (loading || mapLoading) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Updating...' : rideStatus === 'Pending' ? 'Confirm Ride' : 'Complete Ride'}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookRide;