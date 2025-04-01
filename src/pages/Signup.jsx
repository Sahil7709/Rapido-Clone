import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'; // Use this import to get auth functions
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Signup = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { register, loading, user } = useAuthContext(); // Destructure auth functions
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (user) {
      navigate('/profile');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!phone || phone.length !== 10 || !/^[0-9]{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      await register({ name, phone });
      setPhone('');
      setName('');
      navigate('/profile');
    } catch (error) {
      setError('Signup failed: ' + error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section ref={sectionRef} className="bg-white p-6 rounded-3xl shadow-xl w-full max-w-sm mx-auto">
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-4">Create a Rapido Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            maxLength="10"
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-orange-500 hover:underline">
            Log In
          </a>
        </p>
      </section>
    </div>
  );
};

export default Signup;
