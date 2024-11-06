import React from "react";
import LineImage from "../../assets/Iconslatestpackage/icons/Line 2.png";
import pencil from "../../assets/Iconslatestpackage/icons/pencil.png";
import unchecked from "../../assets/Iconslatestpackage/icons/unchecked.png";

const flightData = {
    "uid": "a0e2ac7d-b4d6-48dd-b3e7-2c856d3f3cde",
    "eventType": "interCity",
    "events": [
        {
            "type": "flight",
            "event": {
                "id": "flight-2-1723447017517",
                "title": "Flight: Venice Marco Polo Airport (VCE, Italy) to Leonardo da Vinci–Fiumicino Airport (FCO, Italy)",
                "start": "2024-09-09T06:20:00",
                "end": "2024-09-09T07:25:00",
                "description": "Airline: ITA Airways, Flight Number: 1460",
                "type": "flight",
                "info": {
                    "from": "Venice Marco Polo Airport (VCE, Italy)",
                    "to": "Leonardo da Vinci–Fiumicino Airport (FCO, Italy)",
                    "duration": 65,
                    "airline": "ITA Airways",
                    "flightNumber": "1460",
                    "departure_time": "2024-09-09T06:20:00",
                    "arrival_time": "2024-09-09T07:25:00",
                    "origin_airport_type": "large_airport",
                    "destination_airport_type": "large_airport"
                },
                "city": "Rome (Italy)",
                "flight_id": "flight-2-1723447017517",
                "destination_city_id": 134622,
                "city_id": 148463,
                "duration": 65
            },
            "availability": "notChecked",
            "flightDetails": {
                "flight_id": "flight-2-1723447017517",
                "detail": {
                    "from": "Venice (Italy)",
                    "to": "Rome (Italy)",
                    "legs": [
                        {
                            "from": "Venice Marco Polo Airport (VCE, Italy)",
                            "to": "Leonardo da Vinci–Fiumicino Airport (FCO, Italy)",
                            "duration": 65,
                            "airline": "ITA Airways",
                            "flightNumber": "1460",
                            "departure_time": "2024-09-09T06:20:00",
                            "arrival_time": "2024-09-09T07:25:00",
                            "origin_airport_type": "large_airport",
                            "destination_airport_type": "large_airport"
                        }
                    ]
                }
            }
        }
    ],
    "commuteType": "flightOnly"
};


const FlightCard = () => {

    const flightEvent = flightData.events[0]; // Access the first event
    const flightDetails = flightEvent.event;
    const legDetails = flightDetails.info; // Get leg details from flight info
    // const flightLeg = flightDetails.flightDetails.legs[0]; // Access the first leg of the flight

    // Format the start and end times
    const startTime = new Date(flightDetails.start).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    const endTime = new Date(flightDetails.end).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    const flightstartDate = flightData.events[0].event.info.departure_time.split("T")[0];
    const flightendDate = flightData.events[0].event.info.arrival_time.split("T")[0];
    // Convert to Date object and format
    const formattedStartDate = new Date(flightstartDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    const formattedEndDate = new Date(flightendDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });




    return (
        <div className="mt-[-20px] mb-3 ml-4 shadow-md event-div p-4 m-2 bg-white border border-gray-300 h-24 w-[50rem]">
 
            <div className="p-4">
                <div className='flex flex-row'>
                    <div className='flex flex-col mr-7'>
                        <div className='text-lg text-black font-bold'>{legDetails.airline}</div>
                        <div className='text-lg text-indigo-900'>{legDetails.flightNumber}</div>
                    </div>

            
                    <div className='flex flex-col items-center ml-4'>
                        <div className='text-sm font-bold underline'>{ flightData.events[0].flightDetails.detail.from}</div>
                        <div className='text-sm'>{formattedStartDate}</div>
                        <div className='text-sm'>{startTime}</div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='mb-2 ml-5 mr-5 mt-2'>{flightDetails.duration} min</div>
                        <div className='w-16 h-3 ml-5 mr-5'>
                            {/* <img src={getFlightImage(CommuteData.stopType)}   alt="Flight Type" className="w-12 h-12" /> */}
                            {/* <img src={LineImage} alt="Line" /> */}
                        </div>
                    </div>

                    <div className='flex flex-col items-center mr-3'>
                        <div className='text-sm font-bold underline'>{ flightData.events[0].flightDetails.detail.to}</div>
                        <div className='text-sm'>{formattedEndDate}</div>
                        <div className='text-sm'>{endTime}</div>
                    </div>

                    <div className='flex flex-row items-center justify-between mr-3'>
                        <div className='h-5 w-5 mr-5 ml-5'><img src={pencil} alt="" /></div>
                        <div className='h-5 w-5 ml-5'><img src={unchecked} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightCard;