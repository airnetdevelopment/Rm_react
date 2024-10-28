// CitySelection.jsx

import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Card } from 'primereact/card';
import 'primeicons/primeicons.css';
import visionbinimage from '../../assets/visionbinimage.png';
import testimage from '../../assets/testimage.jpg'


// Sample mock data for departure cities
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
];

// DepartureCityCard component
const DepartureCityCard = ({ departureCityDetails, onAirportSelected }) => {
    const countryImageUrl = `/assets/testimage.jpg`;

    return (
        
        <div className="h-full w-56 flex flex-col items-center">
        {departureCityDetails.recievedInfo && (
            <Card className="w-56 h-[80%] bg-white shadow-lg rounded-xl flex flex-col justify-between">
                {/* Image section */}
                
                <div className="flex items-center justify-center items-center w-full h-20 pl-10 pr-10 pt-4 pb-4 bg-red-200 rounded-t-xl relative">
                <img
                    src={testimage}
                    alt={departureCityDetails.city_name}
                    className="object-cover w-full h-full rounded-t-xl bg-gray-500"
                />
                
                    {/* <div className="w-16 h-20 bg-gray-300 flex items-center justify-center rounded-xl">
                        <span className="text-gray-700 text-sm">Img</span>
                    </div> */}
                </div>

               

                {/* City Name and Airport Selection */}
                <div className="w-full h-44 bg-white p-1 rounded-b-xl shadow-lg">
<h1 className="text-md font-bold text-center text-gray-800 mb-1" style={{paddingTop:'1em'}}>
    {departureCityDetails.city_name}
</h1>
<div className="flex flex-col space-y-2 w-full pl-3 pr-2" style={{paddingLeft: '1em',paddingRight:'1.5em',paddingTop:'0.25em' }}>
    {departureCityDetails.nearbyAirports.map((airport) => (
        <label 
            className="flex items-center gap-2 cursor-pointer" 
            key={airport.iata}
        >
            <input
                type="radio"
                name="airport"
                value={airport.iata}
                checked={airport.isSelected}
                onChange={() =>
                    onAirportSelected(airport.iata, departureCityDetails, 'departure')
                }
                className="text-blue-500 focus:ring-blue-500 h-4 w-4"
            />
            <span className="font-medium text-gray-700 text-xs flex-grow text-left">
                {airport.name} , ({airport.iata})
            </span>
        </label>
    ))}
</div>
</div>

            </Card>
        )}
    </div>

       
    );
};

const CitySelection1 = () => {
    const [departureCityDetails, setDepartureCityDetails] = useState(mockDepartureCityDetails);

    // Function to handle airport selection
    const handleAirportSelection = (iata, details) => {
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

    // Function to move cards in the drag-and-drop
    const moveCard = (fromIndex, toIndex) => {
        const updatedCities = [...departureCityDetails];
        const [movedCity] = updatedCities.splice(fromIndex, 1);
        updatedCities.splice(toIndex, 0, movedCity);
        setDepartureCityDetails(updatedCities);
    };

    const DraggableCityCard = ({ city, index }) => {
        const [, ref] = useDrag({
            type: 'CITY_CARD',
            item: { id: city.id, index },
        });

        const [, drop] = useDrop({
            accept: 'CITY_CARD',
            hover(item) {
                if (item.index !== index) {
                    moveCard(item.index, index);
                    item.index = index; // Update the dragged item's index
                }
            },
        });

        return (
            <div>
            
            <div ref={(node) => ref(drop(node))} className='flex-shrink-0'>
                <DepartureCityCard
                    key={city.id}
                    departureCityDetails={city}
                    onAirportSelected={handleAirportSelection}
                />
            </div>
            </div>
        );
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className='mt-5' >
            <h1 className='text-red-500 font-bold text-xl' >Finalize Your Route Of Travel</h1>
            <h1 className='text-black font-bold'>(Drag And Drop Your City To Change Sequence)</h1>
            <div className='flex flex-row space-x-4 overflow-x-auto'>  
                {departureCityDetails.map((city, index) => (
                    <DraggableCityCard key={city.id} city={city} index={index} />
                ))}
            </div>
            </div>
        </DndProvider>
    );
};

export default CitySelection1;
