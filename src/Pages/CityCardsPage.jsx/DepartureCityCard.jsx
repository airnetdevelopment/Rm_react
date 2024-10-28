import React from 'react';
import { Card } from 'primereact/card'; // PrimeReact Card
import { RadioButton } from 'primereact/radiobutton'; // PrimeReact RadioButton

const DepartureCityCard = ({ departureCityDetails, onAirportSelected }) => {
      // Check if departureCityDetails is defined
      if (!departureCityDetails) {
        return null; // Avoid rendering the component if undefined
    }

    // const countryImageUrl = `https://example.com/images/${departureCityDetails.city_name.toLowerCase()}.jpg`; // Use actual URL
    const countryImageUrl = `https://www.pexels.com/photo/buildings-2224861/`;
    // https://www.pexels.com/photo/buildings-2224861/
    return (
        <div className="h-full w-56 flex flex-col items-center">
            {departureCityDetails.recievedInfo && (
                <Card className="w-56 h-[80%] bg-white shadow-lg rounded-xl flex flex-col justify-between">
                    {/* Image section */}
                    
                    <div className="flex justify-center items-center w-full h-1/2 bg-red-200 rounded-t-xl relative">
                    <img
                        src={countryImageUrl}
                        alt={departureCityDetails.city_name}
                        className="object-cover w-full h-full rounded-t-xl"
                    />
                    
                        <div className="w-16 h-20 bg-gray-300 flex items-center justify-center rounded-xl">
                            <span className="text-gray-700 text-sm">Img</span>
                        </div>
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


export default DepartureCityCard;
