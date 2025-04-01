import { useAuthContext } from '../../context/AuthContext';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout, loading } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      console.log('LogoutButton - Initiating logout');
      await logout();
      console.log('LogoutButton - Logout completed');
      navigate('/');
    } catch (error) {
      console.error('LogoutButton - Error:', error.message);
      alert('Logout failed: ' + error.message);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      disabled={loading}
      className={`inline-block bg-rapidoGray text-rapidoWhite py-1 px-3 rounded hover:bg-gray-600 ${
        loading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {loading ? 'Logging out...' : 'Logout'}
    </Button>
  );
};

export default LogoutButton;