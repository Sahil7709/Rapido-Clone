import LoginForm from './../components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'; // Use context
import { useEffect } from 'react';

const Login = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  console.log('Login page - User:', user);

  useEffect(() => {
    if (user) {
      console.log('Login page - User exists, redirecting to /profile');
      navigate('/profile');
    }
  }, [user, navigate]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-rapidoGray mb-4">Login to Rapido</h2>
      <LoginForm />
    </div>
  );
};

export default Login;