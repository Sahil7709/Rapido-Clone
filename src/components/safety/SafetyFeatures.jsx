import React from 'react';
import { safetyFeatures } from '../../data/safety';

const SafetyFeatures = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
      {safetyFeatures.map((feature, index) => (
        <div
          key={feature.id}
          className="bg-white border border-orange-100 shadow hover:shadow-md rounded-xl p-6 text-center transition duration-300"
        >
          <img
            src={feature.icon || 'https://via.placeholder.com/48'}
            alt={feature.title}
            className="w-12 h-12 mx-auto mb-4 object-contain"
          />
          <h3 className="text-lg font-semibold text-orange-600">{feature.title}</h3>
          <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SafetyFeatures;
