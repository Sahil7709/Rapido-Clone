import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const LoginForm = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const { login, loading } = useAuthContext();
  const navigate = useNavigate();
  const formRef = useRef(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!phone || phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      await login(phone);
      setPhone('');
      navigate('/profile');
    } catch (error) {
      setError('Login failed: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login to Rapido
        </h2>
        <div className="space-y-4">
          <input
            type="tel"
            placeholder="Enter phone number (e.g., 1234567890)"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
            maxLength="10"
          />
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;