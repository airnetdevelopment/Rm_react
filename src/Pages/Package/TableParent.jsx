import React from "react";
import { eventsArr } from "./PackageArray";
import EventTable from "./TableChild";
import { Button } from "primereact/button";

const TableParent = () => {

  const temperatureValue = 24; // Base temperature value
  const isCelsius = temperatureValue < 100;

    return (
      <div className="text-indigo-900 font-semibold border-2 border-indigo-900 ml-5 mr-5 rounded-md w-[50rem]">
        <div className="flex flex-row justify-between  bg-indigo-900 pl-3 pr-3 items-center">
        <div className="text-white text-lg h-12 items-center font-bold">4 Nights in Milan</div>
        <div className="text-xl font-bold flex items-center">
        <span className="mr-1 text-white">{temperatureValue}</span>
        <span className="text-lg font-bold text-white">
          <sup className={`${isCelsius ? 'text-white' : 'text-gray-400'}`}>°C</sup>
          <sup>|</sup>
          <sup className={`${!isCelsius ? 'text-white' : 'text-gray-400'}`}>°F</sup>
        </span>
      </div>
        </div>
        <div className="flex flex-row justify-between items-center border-b-2 border-indigo-900">
        <div className="text-indigo-900 text-md text-left p-1">Stay @ iH Hotels Milano Ambasciatori </div>
        <div className="mr-4 p-2"> 
          <Button label="Select Rooms" className="p-button-info" raised style={{padding:'3px'}}
          />
          </div>
        </div>
        <EventTable eventsArr={eventsArr} /> {/* Pass the eventsArr as a prop */}
      </div>
    );
  };
  
  export default TableParent;