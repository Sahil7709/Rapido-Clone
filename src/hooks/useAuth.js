import { useState, useEffect } from 'react';
import { loginUser, logoutUser, updateUserRides, cancelRide, updateRideStatus } from '../api/authApi';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (phone) => {
    setLoading(true);
    try {
      const userData = await loginUser(phone);
      console.log('Login - Setting user:', userData); // Debug
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return userData;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    console.log('Logout - Starting...');
    setLoading(true);
    try {
      await logoutUser();
      setUser(null);
      localStorage.removeItem('user');
      console.log('Logout - User set to null');
      // Remove window.location.reload() to test natural re-render
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const addRide = async (ride) => {
    if (!user) return;
    setLoading(true);
    try {
      const updatedUser = await updateUserRides(user.phone, ride);
      if (updatedUser) {
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error('Error adding ride:', error);
    } finally {
      setLoading(false);
    }
  };

  const cancelRide = async (rideId) => {
    if (!user) return;
    setLoading(true);
    try {
      const updatedUser = await cancelRide(user.phone, rideId);
      if (updatedUser) {
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error('Error cancelling ride:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateRideStatus = async (rideId, newStatus) => {
    if (!user) return;
    setLoading(true);
    try {
      const updatedUser = await updateRideStatus(user.phone, rideId, newStatus);
      if (updatedUser) {
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error('Error updating ride status:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      console.log('useEffect - Restoring user from localStorage:', storedUser);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return { user, login, logout, addRide, cancelRide, updateRideStatus, loading };
};

export default useAuth;