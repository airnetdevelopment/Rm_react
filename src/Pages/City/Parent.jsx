import React, { useState } from 'react';
import DepartureCityCard from './CityCard'; // Adjust the import path as necessary

const ParentComponent = () => {
    const [departureCityDetails, setDepartureCityDetails] = useState({
        id: 0,
        city_name: '',
        city_id: 0,
        nearbyAirports: [],
        recievedInfo: false,
        type: 'departure',
        locked: true,
        lockedAt: -1,
    });

    // Example function to handle airport selection
    const handleAirportSelection = (iata, cityDetails, type) => {
        console.log(`Selected airport: ${iata} for ${type} city ${cityDetails.city_name}`);
        // Update state or perform any action based on the selected airport
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <DepartureCityCard
                departureCityDetails={departureCityDetails}
                onAirportSelected={handleAirportSelection}
            />
        </div>
    );
};

export default ParentComponent;
