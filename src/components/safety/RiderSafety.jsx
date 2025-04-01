import React from 'react';
import { riderSafetyTips } from '../../data/safety';

const RiderSafety = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <h3 className="text-2xl font-bold text-orange-600 mb-4">Rider Safety Tips</h3>
      <ul className="text-gray-700 space-y-2 text-left max-w-xl mx-auto">
        {riderSafetyTips.map((item, idx) => (
          <li key={idx}>✅ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RiderSafety;
