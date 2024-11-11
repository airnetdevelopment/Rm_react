import React from "react";

const Leisure1 = [
    {
        "id": "leisure-2",
        "start": "2024-09-10T16:00:00.000Z",
        "end": "2024-09-10T18:30:00.000Z",
        "type": "leisure",
        "title": "Leisure Time",
        "duration": 150  // Changed to 150 minutes based on the time difference
    }
];

const leisureEvent = Leisure1[0];
// Convert ISO date strings to local time using toLocaleTimeString
const startTime = new Date(leisureEvent.start).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
});
    
const endTime = new Date(leisureEvent.end).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
});
  
// Assuming you want to show the first leisure event from Leisure1 array

const Leisure = () => {
    return (
        <div className="shadow-md w-[14rem] h-[6rem] text-[11px] items-center justify-center text-center flex p-2 m-1 rounded">
        
            {/* {title}Leisure */}
            <div className='flex flex-col text-center'>
                <div className='font-bold underline'> {startTime}-{endTime} </div>
                <div> {leisureEvent.title} </div>
            </div>
        </div>
    );
};

export default Leisure;
