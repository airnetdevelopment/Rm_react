import React from 'react';
import { eventsArr } from './PackageArray';

const SightEvent = ({ title }) => {
  return (
    <div className="shadow-md event-div p-2 m-1 bg-pink-200 rounded">
      {title}Sight
      
    </div>
  );
};

export default SightEvent;
