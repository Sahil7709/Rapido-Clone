import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Button from '../components/common/Button';
import { useEffect } from 'react';

const Profile = () => {
  const { user, cancelRide, updateRideStatus, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  const handleCancelRide = async (rideId) => {
    try {
      await cancelRide(rideId);
      alert('Ride cancelled successfully!');
    } catch (error) {
      alert('Failed to cancel ride. Please try again.');
    }
  };

  const handleStatusUpdate = async (rideId, currentStatus) => {
    const newStatus = currentStatus === 'Pending' ? 'Confirmed' : 'Completed';
    try {
      await updateRideStatus(rideId, newStatus);
      alert(`Ride status updated to ${newStatus}`);
    } catch (error) {
      alert('Failed to update ride status. Please try again.');
    }
  };

  return (
    <div className="bg-gray-50 max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-400 mb-4">Your Profile</h2>
      <div className="bg-gray-300 shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-orange-400 mb-4">User Details</h3>
        <div className="space-y-2">
          <p><span className="font-bold">Name:</span> {user.name}</p>
          <p><span className="font-bold">Phone:</span> {user.phone}</p>
        </div>

        <h3 className="text-xl font-semibold text-orange-400 mt-6 mb-4">Ride History</h3>
        {user.rides.length > 0 ? (
          <ul className="space-y-4">
            {user.rides.map((ride) => (
              <li key={ride.id} className="border-b pb-2">
                <p><span className="font-bold">Ride ID:</span> {ride.id}</p>
                <p><span className="font-bold">Pickup:</span> {ride.pickup}</p>
                <p><span className="font-bold">Drop-off:</span> {ride.dropoff}</p>
                <p><span className="font-bold">Ride Type:</span> {ride.rideType}</p>
                <p><span className="font-bold">Fare:</span> ₹{ride.fare}</p>
                <p>
                  <span className="font-bold">Status:</span>{' '}
                  <span className={ride.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}>
                    {ride.status}
                  </span>
                </p>
                {ride.status !== 'Completed' && (
                  <div className="mt-2 flex space-x-2">
                    <Button
                      onClick={() => handleCancelRide(ride.id)}
                      disabled={loading}
                      className={`bg-gray-400 text-white py-1 px-3 rounded hover:bg-gray-600 ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {loading ? 'Cancelling...' : 'Cancel Ride'}
                    </Button>
                    <Button
                      onClick={() => handleStatusUpdate(ride.id, ride.status)}
                      disabled={loading}
                      className={`bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {loading ? 'Updating...' : ride.status === 'Pending' ? 'Confirm' : 'Complete'}
                    </Button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-rapidoGray">No rides booked yet.</p>
        )}

        <Button
          onClick={() => navigate('/')}
          className="mt-6 bg-rapidoOrange text-rapidoWhite py-2 px-4 rounded hover:bg-orange-600"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Profile;