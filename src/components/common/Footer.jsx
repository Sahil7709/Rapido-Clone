import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gray-900 text-gray-300 px-4 py-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
        {/* Left Section */}
        <div>
          <p className="text-white text-lg font-semibold">&copy; 2025 Rapido Clone</p>
          <p className="mt-1 text-sm text-gray-400">All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-orange-400 transition">About Us</Link></li>
            <li><Link to="/safety" className="hover:text-orange-400 transition">Safety</Link></li>
            <li><Link to="/blog" className="hover:text-orange-400 transition">Blog</Link></li>
            <li><Link to="/contact-us" className="hover:text-orange-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li><Link to="/careers" className="hover:text-orange-400 transition">Careers</Link></li>
            <li><Link to="/press" className="hover:text-orange-400 transition">Press</Link></li>
            <li><Link to="/corporate" className="hover:text-orange-400 transition">Corporate</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
