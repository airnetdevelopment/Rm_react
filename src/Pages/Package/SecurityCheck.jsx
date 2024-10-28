import React from "react";


const AirportSecurity = [
    {
      
          "id": "airport-1723447017684",
          "start": "2024-09-12T12:40:00.000Z",
          "end": "2024-09-12T14:10:00.000Z",
          "type": "check-in",
          "title": "Airport Check-in and Security",
          "city_id": 134622,
          "destination_city_id": 130443
        
      }
  ];

  const AirportEvent = AirportSecurity[0];
    // Convert ISO date strings to local time using toLocaleTimeString
    const startTime = new Date(AirportEvent.start).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
    
      const endTime = new Date(AirportEvent.end).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
  

const SecurityCheck =() =>{

    return (

    <div className="shadow-md event-div p-2 m-1 rounded">
      {/* {title}Leisure */}
      <div className='flex flex-col text-center'>
        <div className='font-bold underline'> {startTime}-{endTime} </div>
        <div> {AirportEvent.title} </div>
        </div>
    </div>

 );

}


export default SecurityCheck;





