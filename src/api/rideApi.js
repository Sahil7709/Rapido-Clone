import { rides } from '../data/rides';

export const getRideOptions = () => {
  return Promise.resolve(rides);
};

export const bookRide = (pickup, dropoff, rideType) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const selectedRide = rides.options.find((opt) => opt.type === rideType);
      resolve({
        id: Math.random().toString(36).substr(2, 9),
        pickup,
        dropoff,
        rideType,
        fare: selectedRide?.fare || 50, // Use selected ride fare
        status: 'Booked',
      });
    }, 1000);
  });
};