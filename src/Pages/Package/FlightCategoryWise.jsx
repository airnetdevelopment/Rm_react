import React from 'react';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Image } from 'primereact/image';
import nonrefundable from '../../assets/Iconslatestpackage/nonrefundable.png';
import refundable from '../../assets/Iconslatestpackage/refundable.png';
import notavailable from '../../assets/Iconslatestpackage/notavailable.png';
import available from '../../assets/Iconslatestpackage/available.png';
import coachclass from '../../assets/Iconslatestpackage/coach-class.png';


// import non-refundable from '../../assets/Iconslatestpackage/non-refundable.png';

const FlightCategoryWise = () => {
    const flights = [
        {
            route: 'New Delhi ➔ Milan',
            date: 'Thu, Sept 03, 2024',
            segments: [
                {
                    segmentRoute: 'New Delhi ➔ Rome',
                    segmentDate: 'Thu, Sept 03, 2024',
                    departureTime: '08:45',
                    departureCity: 'New Delhi',
                    duration: '8h 35m',
                    arrivalTime: '13:50',
                    arrivalCity: 'Rome',
                    stops: 'Non-stop',
                    available: false,
                    name: 'Air India',
                    flightNumber: 'AI 137',
                    logo: 'assets/air-india-logo.png',
                    refundable: true,
                },
                {
                    segmentRoute: 'Rome ➔ Milan',
                    segmentDate: 'Thu, Sept 03, 2024',
                    departureTime: '15:00',
                    departureCity: 'Rome - Fiumicino Apt',
                    duration: '1h 25m',
                    arrivalTime: '16:25',
                    arrivalCity: 'Milan',
                    stops: 'Non-stop',
                    available: true,
                    name: 'Air India',
                    flightNumber: 'AI 177',
                    logo: 'assets/air-india-logo.png',
                    refundable: true,
                },
            ],
            refundable: true,
            class: 'Economy',
            alerts: '+2 Alerts',
            baggageInfo: 'The check-in baggage for flight is 0 Kgs. Check-in baggage will have to be purchased at an additional cost.'
        },
        {
            route: 'Rome ➔ New Delhi',
            date: 'Thu, Sept 12, 2024',
            segments: [
                {
                    segmentRoute: 'Rome ➔ Istanbul',
                    segmentDate: 'Thu, Sept 12, 2024',
                    departureTime: '17:30',
                    departureCity: 'Rome - Fiumicino Apt',
                    duration: '4h 30m',
                    arrivalTime: '22:00',
                    arrivalCity: 'Istanbul',
                    stops: 'Non-stop',
                    available: false,
                    name: 'Indigo',
                    flightNumber: '6E 321',
                    logo: 'assets/indigo-logo.png',
                    refundable: true,
                },
                {
                    segmentRoute: 'Istanbul ➔ New Delhi',
                    segmentDate: 'Fri, Sept 13, 2024',
                    departureTime: '01:30',
                    departureCity: 'Istanbul Airport',
                    duration: '8h 20m',
                    arrivalTime: '10:50',
                    arrivalCity: 'New Delhi',
                    stops: 'Non-stop',
                    available: false,
                    name: 'Indigo',
                    flightNumber: '6E 456',
                    logo: 'assets/indigo-logo.png',
                    refundable: true,
                },
            ],
            refundable: true,
            class: 'Economy',
            alerts: '+2 Alerts',
            baggageInfo: 'The check-in baggage for flight is 0 Kgs. Check-in baggage will have to be purchased at an additional cost.'
        }
    ];

    return (
        <div className="w-[50rem] mb-6 bg-white rounded-lg mt-4">
            <h3 className="text-lg font-bold text-black text-left mb-4">FLIGHTS</h3>
            {/* <section className="p-1"> */}
                {flights.map((flight, flightIndex) => (
                    <Card key={flightIndex} className="bg-white rounded-lg shadow-lg mb-2 p-1">
                        <div className="flex justify-between items-center border-b pb-1 mb-1 bg-gray-100 pl-2 pt-1">
                            <div>
                                <div className="text-lg font-bold">{flight.route}</div>
                                <div className="text-black text-sm">{flight.date}</div>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3 rounded-md">
                            {flight.segments.map((segment, segmentIndex) => (
                                <Card key={segmentIndex} className="flex flex-col border border-gray-100 rounded-md mt-2">
                                    <div className="flex justify-between items-center border-b pb-1 mb-3 bg-gray-50 pl-2 pt-1">
                                        <div>
                                            <div className="text-lg font-bold">{segment.segmentRoute}</div>
                                            <div className="text-black text-sm">{segment.segmentDate}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 relative">
                                        <div className="flex items-center space-x-1">
                                            {/* <Image src={nonrefundable} alt="Refundable" className="w-5 h-5" /> */}
                                            <Image src={segment.refundable ? refundable : nonrefundable} alt={segment.refundable ? "Refundable" : "Non-Refundable"} className="w-5 h-5" />
                                            <span className="text-xs">{segment.refundable ? 'Refundable' : 'Non-Refundable'}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Image src={coachclass} alt="Class" className="w-5 h-5" />
                                            <span className="text-xs">{flight.class}</span>
                                        </div>
                                        <Image src={segment.available ? available : notavailable} alt={segment.available ? "Available" : "Not Available"} className="absolute top-1 right-2 w-24 h-8 rounded-lg mr-0" />
                                    </div>

                                    <Divider />
                                    <div className="flex items-center space-x-12">
                                        <div className="flex">
                                            <div className="flex-col">
                                                <Image src={segment.logo} alt={segment.name} className="w-12" />
                                            </div>
                                            <div className="flex-col">
                                                <div className="font-bold">{segment.name}</div>
                                                <div className="text-black text-sm">{segment.flightNumber}</div>
                                            </div>
                                        </div>

                                        <div className="flex-col">
                                            <div className="text-lg font-bold">{segment.departureTime}</div>
                                            <div className="text-sm">{segment.departureCity}</div>
                                        </div>
                                        <div className="flex-col">
                                            <div className="flex justify-center text-sm text-gray-500">{segment.duration}</div>
                                            <div className="flex items-center justify-center">
                                                <div className="w-16 h-px bg-gray-400"></div>
                                                <div className="w-2 h-2 bg-gray-500 rounded-full mx-2"></div>
                                                <div className="w-16 h-px bg-gray-400"></div>
                                            </div>
                                            <div className="flex text-sm text-blue-400 justify-center">{segment.stops}</div>
                                        </div>
                                        <div className="flex-col">
                                            <div className="text-lg font-bold">{segment.arrivalTime}</div>
                                            <div className="text-sm">{segment.arrivalCity}</div>
                                        </div>
                                    </div>

                                    <Divider />
                                    <div className="flex text-black text-sm">
                                        <div className="flex space-x-2">
                                            <span>📜</span>
                                            <div className="notification text-xs">
                                                {flight.baggageInfo}
                                            </div>
                                            <div className="alert ml-5">
                                                <a href="#" className="text-blue-500 text-sm">{flight.alerts}</a>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </Card>
                ))}
            {/* </section> */}
        </div>
    );
};

export default FlightCategoryWise;
