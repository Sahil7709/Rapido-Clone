import React, { useState } from 'react';
import faqData from '../../data/faq'; // adjust path if needed

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-600 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-4 py-3 bg-gray-100 hover:bg-orange-100 transition"
              >
                <span className="text-gray-800 font-medium">{item.question}</span>
                <span className="text-orange-500 font-bold text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-600 bg-white border-t border-gray-200">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
