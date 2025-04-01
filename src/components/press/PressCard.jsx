// src/components/press/PressCard.jsx
import React from 'react';

const PressCard = ({ article }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 text-gray-800 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
        <p className="text-sm text-gray-500 mb-1">{article.date}</p>
        <p className="text-sm text-gray-600 mb-4">{article.summary}</p>
      </div>
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block text-orange-500 hover:underline text-sm font-medium"
      >
        Read More →
      </a>
    </div>
  );
};

export default PressCard;
