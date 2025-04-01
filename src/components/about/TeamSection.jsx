import React from 'react';
import { team } from '../../data/team';

const TeamSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
      {team.map((member, index) => (
        <div
          key={member.name}
          className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition duration-300"
        >
          <img
            src={member.image || `https://i.pravatar.cc/150?img=${index + 10}`}
            alt={member.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-lg font-semibold text-orange-600">{member.name}</h3>
          <p className="text-gray-700">{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamSection;
