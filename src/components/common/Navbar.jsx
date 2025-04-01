import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import LogoutButton from '../auth/LogoutButton';

const Navbar = () => {
  const { user, loading } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-orange-600 text-white font-bold p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold" onClick={handleLinkClick}>
            Rapido
          </Link>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="hover:text-yellow-300 transition duration-200">Home</Link>
            <Link to="/about-us" className="hover:text-yellow-300 transition duration-200">About Us</Link>
            <Link to="/safety" className="hover:text-yellow-300 transition duration-200">Safety</Link>
            <Link to="/blog" className="hover:text-yellow-300 transition duration-200">Blog</Link>
            <Link to="/contact-us" className="hover:text-yellow-300 transition duration-200">Contact Us</Link>
            {loading ? (
              <span>Loading...</span>
            ) : user ? (
              <>
                <Link to="/profile" className="font-semibold text-yellow-200 hover:text-white transition duration-200">
                  {user.name}
                </Link>
                <LogoutButton />
              </>
            ) : (
              <Link to="/login" className="hover:text-yellow-300 transition duration-200">Login</Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-orange-100 text-orange-800 font-semibold px-4 py-2 space-y-2 shadow-md">
          <Link to="/" onClick={handleLinkClick} className="block hover:text-orange-600">Home</Link>
          <Link to="/about-us" onClick={handleLinkClick} className="block hover:text-orange-600">About Us</Link>
          <Link to="/safety" onClick={handleLinkClick} className="block hover:text-orange-600">Safety</Link>
          <Link to="/blog" onClick={handleLinkClick} className="block hover:text-orange-600">Blog</Link>
          <Link to="/contact-us" onClick={handleLinkClick} className="block hover:text-orange-600">Contact Us</Link>
          {loading ? (
            <span className="block">Loading...</span>
          ) : user ? (
            <>
              <Link to="/profile" onClick={handleLinkClick} className="block text-orange-600 font-semibold">
                {user.name}
              </Link>
              <div className="block">
                <LogoutButton />
              </div>
            </>
          ) : (
            <Link to="/login" onClick={handleLinkClick} className="block hover:text-orange-600">Login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
