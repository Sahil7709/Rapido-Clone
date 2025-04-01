import { Link } from 'react-router-dom';
import Button from '../common/Button';

const CareersCTA = () => {
  return (
    <div className="bg-gradient-to-r from-orange-100 to-orange-200 text-gray-800 py-10 px-6 rounded-3xl shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        Be a part of Rapido’s mission to transform urban mobility. Explore opportunities with us!
      </p>
      <Link to="/careers">
        <Button className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 transition">
          View Careers
        </Button>
      </Link>
    </div>
  );
};

export default CareersCTA;
