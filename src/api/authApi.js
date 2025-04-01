import { users } from '../data/users';

export const loginUser = (phone) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.phone === phone);
      if (user) {
        console.log('User found in authApi:', user); // Debug
        resolve(user);
      } else {
        reject(new Error('User not found'));
      }
    }, 1000); // Simulate API delay
  });
};

export const logoutUser = () => {
  return Promise.resolve({ message: 'Logged out successfully' });
};

export const updateUserRides = (phone, ride) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userIndex = users.findIndex((u) => u.phone === phone);
      if (userIndex !== -1) {
        users[userIndex].rides.push(ride);
        resolve(users[userIndex]);
      } else {
        resolve(null);
      }
    }, 500);
  });
};

export const cancelRide = (phone, rideId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userIndex = users.findIndex((u) => u.phone === phone);
      if (userIndex !== -1) {
        const rideIndex = users[userIndex].rides.findIndex((r) => r.id === rideId);
        if (rideIndex !== -1) {
          users[userIndex].rides.splice(rideIndex, 1);
          resolve(users[userIndex]);
        } else {
          reject(new Error('Ride not found'));
        }
      } else {
        reject(new Error('User not found'));
      }
    }, 500);
  });
};

export const updateRideStatus = (phone, rideId, newStatus) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userIndex = users.findIndex((u) => u.phone === phone);
      if (userIndex !== -1) {
        const rideIndex = users[userIndex].rides.findIndex((r) => r.id === rideId);
        if (rideIndex !== -1) {
          users[userIndex].rides[rideIndex].status = newStatus;
          resolve(users[userIndex]);
        } else {
          reject(new Error('Ride not found'));
        }
      } else {
        reject(new Error('User not found'));
      }
    }, 1000);
  });
};