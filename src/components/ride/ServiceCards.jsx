import { useState, useEffect } from 'react';
import { getRideOptions } from '../../api/rideApi';

const ServiceCards = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getRideOptions().then((data) => setOptions(data.options));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {options.map((option) => (
          <div
            key={option.type}
            className="bg-white border border-gray-200 shadow hover:shadow-lg rounded-xl p-6 text-center transition duration-300"
          >
            <img
              src={option.icon}
              alt={option.type}
              className="h-24 mx-auto mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold text-orange-600 mb-1">{option.type}</h3>
            <p className="text-gray-700 font-medium">₹{option.fare}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
