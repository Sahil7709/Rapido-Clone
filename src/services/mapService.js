export const getMapData = (pickup, dropoff, status) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Comprehensive list of Indian localities with coordinates
        const locations = {
          // Delhi
          'Hauz Khas': { lat: 28.5494, lng: 77.1991 },
          'India Gate': { lat: 28.6129, lng: 77.2295 },
          'Connaught Place': { lat: 28.6315, lng: 77.2197 },
          // Mumbai
          'Marine Drive': { lat: 18.9440, lng: 72.8238 },
          'Bandra': { lat: 19.0607, lng: 72.8295 },
          'Colaba': { lat: 18.9151, lng: 72.8260 },
          // Bangalore
          'MG Road': { lat: 12.9756, lng: 77.6068 },
          'Koramangala': { lat: 12.9352, lng: 77.6245 },
          'Indiranagar': { lat: 12.9719, lng: 77.6412 },
          // Hyderabad
          'Banjara Hills': { lat: 17.4108, lng: 78.4294 },
          'Gachibowli': { lat: 17.4401, lng: 78.3489 },
          'Hitech City': { lat: 17.4416, lng: 78.3820 },
          // Chennai
          'T. Nagar': { lat: 13.0405, lng: 80.2337 },
          'Marina Beach': { lat: 13.0500, lng: 80.2824 },
          'Adyar': { lat: 13.0064, lng: 80.2575 },
          // Kolkata
          'Park Street': { lat: 22.5531, lng: 88.3532 },
          'Salt Lake': { lat: 22.5735, lng: 88.4128 },
          'Howrah': { lat: 22.5958, lng: 88.2636 },
          // Other Cities
          'Jaipur City': { lat: 26.9124, lng: 75.7873 },
          'Ahmedabad Central': { lat: 23.0225, lng: 72.5714 },
          'Pune Station': { lat: 18.5204, lng: 73.8567 },
          'Lucknow Chowk': { lat: 26.8467, lng: 80.9462 },
        };
  
        // Use provided locations or fallback to defaults
        const pickupCoords = locations[pickup] || { lat: 28.6139, lng: 77.2090 }; // Default: Delhi
        const dropoffCoords = locations[dropoff] || { lat: 28.6279, lng: 77.2240 }; // Default: Nearby Delhi
  
        const mapData = {
          pickup: { ...pickupCoords, name: pickup },
          dropoff: { ...dropoffCoords, name: dropoff },
          status: status,
          route: status === 'Confirmed' || status === 'Completed'
            ? 'Route from pickup to drop-off'
            : 'Waiting for captain...',
        };
        resolve(mapData);
      }, 1000); // Simulate API delay
    });
  };