import React, { useState } from 'react';
import DepartureCityCard from './DepartureCityCard';

const CitySelection = () => {
    // Mock data for departureCityDetails
    const mockDepartureCityDetails = [
        {
            id: 1,
            city_name: 'New York',
            city_id: 101,
            nearbyAirports: [
                { name: 'John F. Kennedy International Airport', iata: 'JFK', isSelected: false },
                { name: 'LaGuardia Airport', iata: 'LGA', isSelected: false },
                
            ],
            recievedInfo: true,
            type: 'departure',
            locked: false,
            lockedAt: -1,
        },
        {
            id: 2,
            city_name: 'Los Angeles',
            city_id: 102,
            nearbyAirports: [
                { name: 'Los Angeles International Airport', iata: 'LAX', isSelected: false },
                { name: 'Hollywood Burbank Airport', iata: 'BUR', isSelected: false },
                
            ],
            recievedInfo: true,
            type: 'departure',
            locked: false,
            lockedAt: -1,
        },
        {
            id: 3,
            city_name: 'Chicago',
            city_id: 103,
            nearbyAirports: [
                { name: 'O’Hare International Airport', iata: 'ORD', isSelected: false },
                { name: 'Midway International Airport', iata: 'MDW', isSelected: false },
                
            ],
            recievedInfo: true,
            type: 'departure',
            locked: false,
            lockedAt: -1,
        },
        {
            id: 4,
            city_name: 'London',
            city_id: 104,
            nearbyAirports: [
                { name: 'Heathrow Airport', iata: 'LHR', isSelected: false },
                { name: 'Gatwick Airport', iata: 'LGW', isSelected: false },
                
            ],
            recievedInfo: true,
            type: 'departure',
            locked: false,
            lockedAt: -1,
        },
        {
            id: 5,
            city_name: 'Tokyo',
            city_id: 105,
            nearbyAirports: [
                { name: 'Narita International Airport', iata: 'NRT', isSelected: false },
                { name: 'Haneda Airport', iata: 'HND', isSelected: false },
                
            ],
            recievedInfo: true,
            type: 'departure',
            locked: false,
            lockedAt: -1,
        },
        {
            id: 6,
            city_name: 'Paris',
            city_id: 106,
            nearbyAirports: [
                { name: 'Charles de Gaulle Airport', iata: 'CDG', isSelected: false },
                { name: 'Orly Airport', iata: 'ORY', isSelected: false },
                
            ],
            recievedInfo: true,
            type: 'departure',
            locked: false,
            lockedAt: -1,
        },
        {
            id: 7,
            city_name: 'Berlin',
            city_id: 107,
            nearbyAirports: [
                { name: 'Berlin Brandenburg Airport', iata: 'BER', isSelected: false },
                { name: 'Schönefeld Airport', iata: 'SXF', isSelected: false },
                
            ],
            recievedInfo: true,
            type: 'departure',
            locked: false,
            lockedAt: -1,
        },
        {
            id: 8,
            city_name: 'Sydney',
            city_id: 108,
            nearbyAirports: [
                { name: 'Sydney Kingsford Smith Airport', iata: 'SYD', isSelected: false },
                { name: 'Bankstown Airport', iata: 'BWU', isSelected: false },
                
            ],
            recievedInfo: true,
            type: 'departure',
            locked: false,
            lockedAt: -1,
        },
        {
            id: 9,
            city_name: 'Dubai',
            city_id: 109,
            nearbyAirports: [
                { name: 'Dubai International Airport', iata: 'DXB', isSelected: false },
                { name: 'Al Maktoum International Airport', iata: 'DWC', isSelected: false },
                
            ],
            recievedInfo: true,
            type: 'departure',
            locked: false,
            lockedAt: -1,
        },
        {
            id: 10,
            city_name: 'Singapore',
            city_id: 110,
            nearbyAirports: [
                { name: 'Changi Airport', iata: 'SIN', isSelected: false },
                { name: 'Seletar Airport', iata: 'XSP', isSelected: false }
            ],
            recievedInfo: true,
            type: 'departure',
            locked: false,
            lockedAt: -1,
        },
        
        // Add other city details here
    ];

    const [departureCityDetails, setDepartureCityDetails] = useState(mockDepartureCityDetails);

    // Function to handle airport selection
    const handleAirportSelection = (iata, details, type) => {
        const updatedAirports = details.nearbyAirports.map(airport => ({
            ...airport,
            isSelected: airport.iata === iata,
        }));

        const updatedDetails = departureCityDetails.map((city) => 
            city.id === details.id
            ? { ...details, nearbyAirports: updatedAirports }
            : city
        );

        setDepartureCityDetails(updatedDetails);
    };

    return (

        
        <div className='flex flex-row space-x-4 overflow-x-auto'>

            <div className=''></div>
            
            {departureCityDetails.map((city) => (
                <DepartureCityCard
                    key={city.id} // Add a unique key
                    departureCityDetails={city}
                    onAirportSelected={handleAirportSelection}
                    
                />
                
            ))}
        </div>
    );
};


export default CitySelection;
