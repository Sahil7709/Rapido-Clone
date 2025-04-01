import React from 'react';
import { captainSafetyGuidelines } from '../../data/safety';

const CaptainSafety = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <h3 className="text-2xl font-bold text-orange-600 mb-4">Captain Safety Guidelines</h3>
      <ul className="text-gray-700 space-y-2 text-left max-w-xl mx-auto">
        {captainSafetyGuidelines.map((item, idx) => (
          <li key={idx}>✅ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaptainSafety;
