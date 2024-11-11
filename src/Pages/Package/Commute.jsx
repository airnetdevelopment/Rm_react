import React from "react";
import { Card } from "primereact/card";
import { Tooltip } from "primereact/tooltip";
import sedan from "../../assets/icons/sedan-car-model.png";


const Commutedata=[
   
    {
        "id": "commute-1723447017527",
        "start": "2024-09-03T18:19:00.000Z",
        "end": "2024-09-03T19:20:00.000Z",
        "type": "commute-airport-hotel",
        "title": "Commute to Hotel: iH Hotels Milano Ambasciatori",
        "city_id": 127769,
        "related_id": "hotel-0-1723447017514"
    }
  
];

const CommuteData = Commutedata[0];

// Convert ISO date strings to local time using toLocaleTimeString
const startTime = new Date(CommuteData.start).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
});

const endTime = new Date(CommuteData.end).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
});

const Commute = () => {
    return (

        <div className="shadow-md w-[14rem] h-[6rem] text-[11px] items-center justify-center text-center flex p-2 m-1 rounded">
            {/* Logo Image */}
            <div className="flex-shrink-0 mr-2">
                <img src={sedan} alt="Logo" className="w-12 h-12" /> {/* Adjust width and height as needed */}
            </div>
      
            {/* Event Details */}
            <div className='flex flex-col text-center flex-grow'>
                <div className='font-bold underline'>{startTime}-{endTime}</div>
                <div className='mb-1'>
                    {CommuteData.title.split(": ")[0]} <br />
                    {CommuteData.title.split(": ")[1]}
                </div>
            </div>
        </div>
    
       
    );
};

export default Commute;
