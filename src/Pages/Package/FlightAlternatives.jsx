import React from "react";
import nonrefundable from "../../assets/icons/nonrefundable.png";
import refundable from "../../assets/icons/refundable.png";
import notavailable from "../../assets/icons/notavailable.png";
import available from "../../assets/icons/available.png";
import coachclass from "../../assets/icons/coach-class.png";
// import { Button } from 'primereact/button';
// import { Tooltip } from 'react-leaflet';
// import { Tooltip } from 'primereact/tooltip';
import { Image } from "primereact/image";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";

const FlightAlternatives = () => {

    const flightalternatives = [
        {
            type: "flight",
            event: {
                id: "flight-5-1723038173524",
                title: "New York (JFK, USA) to Tokyo Haneda Airport (HND, Japan)",
                start: "2024-09-15T09:30:00",
                end: "2024-09-16T05:50:00",
                description: "Airline: Japan Airlines, Flight Numbers: 810, 815",
                type: "flight",
                info: {
                    from: "John F. Kennedy International Airport (JFK, USA)",
                    to: "Tokyo Haneda Airport (HND, Japan)",
                    duration: 780,
                    airline: "Japan Airlines",
                    flightNumbers: ["810", "815"],
                    departure_time: "2024-09-15T09:30:00",
                    arrival_time: "2024-09-16T05:50:00",
                    origin_airport_type: "large_airport",
                    destination_airport_type: "large_airport",
                },
                city: "Tokyo (Japan)",
                flight_id: "flight-5-1723038173524",
                destination_city_id: 1850147,
                city_id: 5128581,
                duration: 780,
            },
            availability: "available",
            flightDetails: {
                flight_id: "flight-5-1723038173524",
                detail: {
                    from: "New York (USA)",
                    to: "Tokyo (Japan)",
                    legs: [
                        {
                            from: "John F. Kennedy International Airport (JFK, USA)",
                            to: "Los Angeles International Airport (LAX, USA)",
                            duration: 355,
                            airline: "Japan Airlines",
                            flightNumber: "810",
                            departure_time: "2024-09-15T09:30:00",
                            arrival_time: "2024-09-15T13:25:00",
                            origin_airport_type: "large_airport",
                            destination_airport_type: "large_airport",
                        },
                        {
                            from: "Los Angeles International Airport (LAX, USA)",
                            to: "Tokyo Haneda Airport (HND, Japan)",
                            duration: 425,
                            airline: "Japan Airlines",
                            flightNumber: "815",
                            departure_time: "2024-09-15T15:00:00",
                            arrival_time: "2024-09-16T05:50:00",
                            origin_airport_type: "large_airport",
                            destination_airport_type: "large_airport",
                        },
                    ],
                },
            },
        },
        {
            type: "flight",
            event: {
                id: "flight-6-1723038173525",
                title: "Sydney (SYD, Australia) to London Heathrow (LHR, UK)",
                start: "2024-09-18T21:00:00",
                end: "2024-09-19T14:00:00",
                description: "Airline: Qantas, Flight Numbers: 1, 2, 3",
                type: "flight",
                info: {
                    from: "Sydney Kingsford Smith Airport (SYD, Australia)",
                    to: "London Heathrow Airport (LHR, UK)",
                    duration: 1080,
                    airline: "Qantas",
                    flightNumbers: ["1", "2", "3"],
                    departure_time: "2024-09-18T21:00:00",
                    arrival_time: "2024-09-19T14:00:00",
                    origin_airport_type: "large_airport",
                    destination_airport_type: "large_airport",
                },
                city: "London (UK)",
                flight_id: "flight-6-1723038173525",
                destination_city_id: 2643743,
                city_id: 2147714,
                duration: 1080,
            },
            availability: "available",
            flightDetails: {
                flight_id: "flight-6-1723038173525",
                detail: {
                    from: "Sydney (Australia)",
                    to: "London (UK)",
                    legs: [
                        {
                            from: "Sydney Kingsford Smith Airport (SYD, Australia)",
                            to: "Singapore Changi Airport (SIN, Singapore)",
                            duration: 520,
                            airline: "Qantas",
                            flightNumber: "1",
                            departure_time: "2024-09-18T21:00:00",
                            arrival_time: "2024-09-19T04:40:00",
                            origin_airport_type: "large_airport",
                            destination_airport_type: "large_airport",
                        },
                        {
                            from: "Singapore Changi Airport (SIN, Singapore)",
                            to: "Dubai International Airport (DXB, UAE)",
                            duration: 430,
                            airline: "Qantas",
                            flightNumber: "2",
                            departure_time: "2024-09-19T06:00:00",
                            arrival_time: "2024-09-19T10:10:00",
                            origin_airport_type: "large_airport",
                            destination_airport_type: "large_airport",
                        },
                        {
                            from: "Dubai International Airport (DXB, UAE)",
                            to: "London Heathrow Airport (LHR, UK)",
                            duration: 530,
                            airline: "Qantas",
                            flightNumber: "3",
                            departure_time: "2024-09-19T12:00:00",
                            arrival_time: "2024-09-19T14:00:00",
                            origin_airport_type: "large_airport",
                            destination_airport_type: "large_airport",
                        },
                    ],
                },
            },
        },
        {
            type: "flight",
            event: {
                id: "flight-7-1723038173526",
                title: "San Francisco (SFO, USA) to Frankfurt (FRA, Germany)",
                start: "2024-09-20T13:45:00",
                end: "2024-09-21T09:10:00",
                description: "Airline: Lufthansa, Flight Numbers: 455, 400",
                type: "flight",
                info: {
                    from: "San Francisco International Airport (SFO, USA)",
                    to: "Frankfurt Airport (FRA, Germany)",
                    duration: 685,
                    airline: "Lufthansa",
                    flightNumbers: ["455", "400"],
                    departure_time: "2024-09-20T13:45:00",
                    arrival_time: "2024-09-21T09:10:00",
                    origin_airport_type: "large_airport",
                    destination_airport_type: "large_airport",
                },
                city: "Frankfurt (Germany)",
                flight_id: "flight-7-1723038173526",
                destination_city_id: 2925533,
                city_id: 5391959,
                duration: 685,
            },
            availability: "available",
            flightDetails: {
                flight_id: "flight-7-1723038173526",
                detail: {
                    from: "San Francisco (USA)",
                    to: "Frankfurt (Germany)",
                    legs: [
                        {
                            from: "San Francisco International Airport (SFO, USA)",
                            to: "Chicago O'Hare International Airport (ORD, USA)",
                            duration: 240,
                            airline: "Lufthansa",
                            flightNumber: "455",
                            departure_time: "2024-09-20T13:45:00",
                            arrival_time: "2024-09-20T18:05:00",
                            origin_airport_type: "large_airport",
                            destination_airport_type: "large_airport",
                        },
                        {
                            from: "Chicago O'Hare International Airport (ORD, USA)",
                            to: "Frankfurt Airport (FRA, Germany)",
                            duration: 445,
                            airline: "Lufthansa",
                            flightNumber: "400",
                            departure_time: "2024-09-20T20:00:00",
                            arrival_time: "2024-09-21T09:10:00",
                            origin_airport_type: "large_airport",
                            destination_airport_type: "large_airport",
                        },
                    ],
                },
            },
        },
        {
            type: "flight",
            event: {
                id: "flight-8-1723038173527",
                title: "Toronto (YYZ, Canada) to Sydney (SYD, Australia)",
                start: "2024-09-25T18:20:00",
                end: "2024-09-27T06:45:00",
                description: "Airline: Air Canada, Flight Numbers: 33, 721",
                type: "flight",
                info: {
                    from: "Toronto Pearson International Airport (YYZ, Canada)",
                    to: "Sydney Kingsford Smith Airport (SYD, Australia)",
                    duration: 1245,
                    airline: "Air Canada",
                    flightNumbers: ["33", "721"],
                    departure_time: "2024-09-25T18:20:00",
                    arrival_time: "2024-09-27T06:45:00",
                    origin_airport_type: "large_airport",
                    destination_airport_type: "large_airport",
                },
                city: "Sydney (Australia)",
                flight_id: "flight-8-1723038173527",
                destination_city_id: 2147714,
                city_id: 6167865,
                duration: 1245,
            },
            availability: "available",
            flightDetails: {
                flight_id: "flight-8-1723038173527",
                detail: {
                    from: "Toronto (Canada)",
                    to: "Sydney (Australia)",
                    legs: [
                        {
                            from: "Toronto Pearson International Airport (YYZ, Canada)",
                            to: "Vancouver International Airport (YVR, Canada)",
                            duration: 300,
                            airline: "Air Canada",
                            flightNumber: "33",
                            departure_time: "2024-09-25T18:20:00",
                            arrival_time: "2024-09-25T21:20:00",
                            origin_airport_type: "large_airport",
                            destination_airport_type: "large_airport",
                        },
                        {
                            from: "Vancouver International Airport (YVR, Canada)",
                            to: "Sydney Kingsford Smith Airport (SYD, Australia)",
                            duration: 945,
                            airline: "Air Canada",
                            flightNumber: "721",
                            departure_time: "2024-09-25T23:00:00",
                            arrival_time: "2024-09-27T06:45:00",
                            origin_airport_type: "large_airport",
                            destination_airport_type: "large_airport",
                        },
                    ],
                },
            },
        } 
    ];

    const formattedDate = new Date("2024-09-03").toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
    }).replace(" ", " ").replace(",", ",");
      
    console.log(formattedDate); // Output: "3 Sep, 2024"
      

    return (

        <div>
            {flightalternatives.map((alternative, index) => {
                const segment = alternative.flightDetails?.detail?.legs[0]; 

                if (!segment) return null; 

                return (
                    <div key={alternative.event.id} className=" mb-3 shadow-lg flex flex-col border border-gray-300 rounded-md mt-1">
                        <div className="flex justify-between items-center border-b pb-1 mb-1 bg-gray-50">
                            <div>
                                <div className="text-sm font-bold pl-2 p-2 text-black">{alternative.event.title}</div>
                                <div className="text-black text-xs pl-2">{formattedDate}</div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 relative p-2 pl-4">
                            <div className="flex items-center space-x-1 text-xs">
                                {/* Example for refundable status */}
                                <Image src={segment.duration > 0 ? refundable : nonrefundable} alt="Refundable" className="w-5 h-5" />
                                <span className="text-xs">{segment.duration > 0 ? "Refundable" : "Non-Refundable"}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-xs">
                                <Image src={coachclass} alt="Class" className="w-5 h-5" />
                                <span className="text-xs">2 Adults</span>
                            </div>
                            <Image src={alternative.availability === "available" ? available : notavailable} alt="Available" className="absolute top-1 right-2 w-24 h-8 rounded-lg mr-0" />
                        </div>
                        <div className="flex items-center space-x-12 mt-2 pl-3 text-xs">
                            <div className="flex">
                                <div className="flex-col">
                                    <Image src={segment.airlineLogo || segment.logo} alt={segment.airline || "Airline"} className="w-12" />
                                </div>
                                <div className="flex-col text-center">
                                    <div className="font-bold text-xs text-black">{segment.airline}</div>
                                    <div className="text-black text-xs">{segment.flightNumber}</div>
                                </div>
                            </div>

                            <div className="flex-col text-center">
                                <div className="text-xs font-bold text-black">{formattedDate}</div>
                                <div className="text-xs">{segment.from}</div>
                            </div>
                            <div className="flex-col">
                                <div className="flex justify-center text-xs text-black font-bold">{Math.floor(segment.duration / 60)}h {segment.duration % 60}m</div>
                                <div className="flex items-center justify-center">
                                    <div className="w-10 h-px bg-gray-400"></div>
                                    <div className="w-2 h-2 bg-gray-500 rounded-full mx-2"></div>
                                    <div className="w-10 h-px bg-gray-400"></div>
                                </div>
                            </div>
                            <div className="flex-col text-center">
                                <div className="text-xs font-bold text-black">{new Date(segment.arrival_time).toLocaleTimeString()}</div>
                                <div className="text-xs">{segment.to}</div>
                            </div>
                        </div>
                        
                        <hr className="mt-3 mb-1" style={{marginBottom:"1px"}} />
                        <div className="flex justify-between text-black text-xs mt-2 p-2">
                            <span>📜 Baggage Info: {alternative.event.description}</span>
                            <div className="ml-10">
                                <a href="#" className="text-blue-500 text-xs">View Alerts</a>
                            </div>
                        </div>

                    </div>
                );
            })}


      
        </div>
    );
};

export default FlightAlternatives;
