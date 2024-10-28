import React from 'react';
import RouteMap1 from './MapTest1';

const AppTest1 = () => {
  // Example route with coordinates for different cities
  const route = [
    [28.6139, 77.2090],  // Delhi
    [41.9028, 12.4964],  // Rome
    [45.4408, 12.3155],  // Venice
    [45.4642, 9.1900],   // Milan
    [51.5074, -0.1278]   // London
  ];

  return (
    <div>
      <h1>Travel Route Planner</h1>
      <RouteMap1 route={route} />
    </div>
  );
};

export default AppTest1;
