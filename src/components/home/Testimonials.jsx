import React from 'react';
import testimonials from '../../data/testimonials'; // Adjust path if needed

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-8">What Our Riders Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map(({ id, name, feedback, avatar }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={avatar}
                alt={name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
              <p className="text-gray-600 mt-2 text-sm">"{feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
