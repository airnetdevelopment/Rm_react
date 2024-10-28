// CitySelection.jsx

import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Card } from 'primereact/card';
import 'primeicons/primeicons.css';
import { LockIcon, UnlockIcon,TrashIcon } from '@primer/octicons-react';
import visionbinimage from '../../assets/visionbinimage.png';
import testimage from '../../assets/testimage.jpg'
import NightsDialog from './NightsSightCounter';
import { Button } from 'primereact/button';
import { useEffect, useRef } from 'react';
import Sortable from 'sortablejs';



// Sample mock data for departure cities
const mockDepartureCityDetails = [
    {
        id: 1,
        city_name: '1',
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
        city_name: '2',
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
        city_name: '3',
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
        city_name: '4',
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
        city_name: '5',
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
        city_name: '6',
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
    
];

// DepartureCityCard component
const DepartureCityCard = ({ departureCityDetails, onAirportSelected,onToggleLock, onDeleteCity }) => {
    const countryImageUrl = `/assets/testimage.jpg`;
    const [locked, setLocked] = useState(departureCityDetails.locked);

    // Toggle lock state on click
    const toggleLock = () => {
        setLocked(!locked);
        onToggleLock(departureCityDetails.id); // Notify parent of lock change
      };

    //   test for delete
    // const onDeleteCity = (cityId) => {
    //     const updatedCities = departureCityDetails.filter(city => city.id !== cityId);
    //     setDepartureCityDetails(updatedCities);
    // };

    return (
        
        <div className="h-full w-48 flex flex-col items-center">
        {departureCityDetails.recievedInfo && (
            <Card className="relative w-48 h-[80%] bg-white shadow-lg rounded-xl flex flex-col justify-between">
                {/* Image section */}
                
                <div className="flex justify-center items-center w-full h-16 pl-10 pr-10 pt-4 pb-2 bg-red-200 rounded-t-xl relative">
                <div className="absolute top-1 left-2">
                 <button onClick={toggleLock} className='text-black'>
                {locked ? (
                    <LockIcon size={16} />
                ) : (
                    <UnlockIcon size={16} />
                )}
                </button>
                </div>
                <img
                    src={testimage}
                    alt={departureCityDetails.city_name}
                    className="object-cover w-full h-full rounded-t-xl bg-gray-500"
                />
                <div className="absolute top-1 right-2">
                <TrashIcon size={16} className="text-black" onClick={() => onDeleteCity(departureCityDetails.id)}  />
                </div>
                </div>

               

        {/* City Name and Airport Selection */}
        <div className="w-full h-28 bg-white p-1 rounded-b-xl shadow-lg">
        <h1 className="text-sm font-bold text-center text-gray-800 mb-0">
           {departureCityDetails.city_name}
        </h1>
        <div className="flex flex-col w-full pl-1 pr-1" style={{ }}>
         { departureCityDetails.nearbyAirports.map((airport) => (
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

const CitySelection2 = () => {
    const [departureCityDetails, setDepartureCityDetails] = useState(mockDepartureCityDetails);
    const sortableRef = useRef(null); 
    const [dialogVisible, setDialogVisible] = useState(false);

    const showDialog = () => {
        setDialogVisible(true);
    };
    
    const hideDialog = () => {
        setDialogVisible(false);
    };

    // Toggle lock status
    const handleToggleLock = (cityId) => {
    const updatedDetails = departureCityDetails.map((city) =>
      city.id === cityId ? { ...city, locked: !city.locked } : city
    );
    setDepartureCityDetails(updatedDetails);
    };
    
    const onDeleteCity = (cityId) => {
        console.log(`Deleting city with ID: ${cityId}`);
        const updatedCities = departureCityDetails.filter(city => city.id !== cityId);
        setDepartureCityDetails(updatedCities);
    };
    

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

    useEffect(() => {
        if (sortableRef.current) {
            const sortable = Sortable.create(sortableRef.current, {
                animation: 150,
                
                draggable:'.card:not(.locked)',
                filter: '.locked', // This class will be used to identify locked cards
                preventOnFilter: true, // Prevent dragging if the element matches the filter
                onEnd: (event) => {
                    const updatedCities = [...departureCityDetails];
                    const movedCity = updatedCities[event.oldIndex];
                
                    // Proceed only if the moved city is not locked
                    if (!movedCity.locked) {
                        // Get the indices of unlocked cities only for proper reordering
                        const unlockedCities = updatedCities.filter(city => !city.locked);
                
                        // Calculate the new index by removing the count of locked cities from the new index
                        const newIndex = event.newIndex - updatedCities.slice(0, event.newIndex).filter(city => city.locked).length;
                
                        // If the new index is out of bounds, constrain it
                        const validNewIndex = Math.max(0, Math.min(newIndex, unlockedCities.length - 1));
                
                        // Find the index of the moved city among unlocked cities
                        const unlockedOldIndex = unlockedCities.findIndex(city => city.id === movedCity.id);
                
                        // Remove the city from its old position and insert it at the new position
                        unlockedCities.splice(unlockedOldIndex, 1); // Remove from old position
                        unlockedCities.splice(validNewIndex, 0, movedCity); // Insert at new position
                
                        // Rebuild the updatedCities array to preserve locked city positions
                        const reorderedCities = updatedCities.map(city => 
                            city.locked ? city : unlockedCities.shift()
                        );
                
                        setDepartureCityDetails(reorderedCities);
                    } else {
                        // If locked, do nothing or provide feedback if needed
                        // For example: alert("This city is locked and cannot be moved.");
                    }
                }
                
            });
    
            return () => {
                sortable.destroy(); // Cleanup on component unmount
            };
        }
    }, [departureCityDetails]);
    
    const DraggableCityCard = ({ city }) => (
        <div className='flex-shrink-0'>
            <DepartureCityCard
                key={city.id}
                departureCityDetails={city}
                onAirportSelected={handleAirportSelection}
                onToggleLock={handleToggleLock}
                onDeleteCity={onDeleteCity}
            />
        </div>
    );

    return (
        <div className='mt-[-50px]'>
        <h1 className='text-red-500 font-bold text-xl'>Finalize Your Route Of Travel</h1>
        <h1 className='text-black font-bold'>(Drag And Drop Your City To Change Sequence)</h1>
        <div ref={sortableRef} className='flex flex-row space-x-4 overflow-x-auto'>
            {departureCityDetails.map((city) => (
                <div key={city.id} className={`card ${city.locked ? 'locked' : ''}`}>
                    <DraggableCityCard city={city} />
                    <Button label="Add Nights and SightSeeings" className='mt-[-25px] mb-2 p-1 h-10 text-sm font-bold bg-indigo-900 text-white pt-1 pb-1 pl-2 pr-2 rounded-xl ' onClick={showDialog} />
                    <NightsDialog
                        visible={dialogVisible}
                        onHide={hideDialog}
                        cities={departureCityDetails} // Pass all cities to the dialog
                    />
                </div>
            ))}
        </div>
        <Button label="Generate Routes" className='bg-red-500 text-white font-bold text-sm h-12 pt-2 pb-2 pl-3 pr-3 rounded-xl mt-2' />
    </div>

    );
};

export default CitySelection2;
