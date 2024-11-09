import React,{ useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import nonrefundable from "../../assets/Iconslatestpackage/icons/nonrefundable.png";
import refundable from "../../assets/Iconslatestpackage/icons/refundable.png";
import notavailable from "../../assets/Iconslatestpackage/icons/notavailable.png";
import available from "../../assets/Iconslatestpackage/icons/available.png";
import coachclass from "../../assets/Iconslatestpackage/icons/coach-class.png";
import { Image } from "primereact/image";
import group from "../../assets/Iconslatestpackage/icons/group.png";


const HotelAlternatives = () => {

    const hotelalternatives = [
        { name:"Hotel Ivory",
            room: "Deluxe Double Room",
            image: "hotel-image.jpg",
            dateRange: "Thu, Sept 03, 2024 ⟶ Sat, Sept 05, 2024",
            availability: true, // true for "Available", false for "Not Available"
            isRefundable: true, // true for "Refundable", false for "Non Refundable"
            accommodates: "2 Adults",
            rating: "4★",
            reviewScore: "7.2/10",
            reviewSource: "Bookings.com",
            checkInTime: "12:00 PM",
            checkOutTime: "2:00 PM",
            inclusions: [
                "Non-smoking rooms",
                "Free WiFi",
                "Bed And Breakfast",
                "Air Conditioner"
            ],
            exclusions: ["Terrace", "Bar"]
        },
        {
            name:"Hotel Supreme",
            room: "Superior King Room",
            image: "hotel-image-2.jpg",
            dateRange: "Thu, Sept 08, 2024 ⟶ Sat, Sept 10, 2024",
            availability: false,
            isRefundable: false,
            accommodates: "3 Adults",
            rating: "5★",
            reviewScore: "8.5/10",
            reviewSource: "Hotels.com",
            checkInTime: "1:00 PM",
            checkOutTime: "11:00 AM",
            inclusions: [
                "Non-smoking rooms",
                "Free WiFi",
                "Breakfast Included",
                "Swimming Pool"
            ],
            exclusions: ["Parking", "Pet Friendly"]
        },
        { name:"Hotel Hyatt",
            room: "Standard Twin Room",
            image: "hotel-image-3.jpg",
            dateRange: "Thu, Sept 15, 2024 ⟶ Sat, Sept 20, 2024",
            availability: true,
            isRefundable: true,
            accommodates: "2 Adults and 1 Child",
            rating: "3★",
            reviewScore: "6.8/10",
            reviewSource: "Expedia.com",
            checkInTime: "3:00 PM",
            checkOutTime: "12:00 PM",
            inclusions: [
                "Non-smoking rooms",
                "Free WiFi",
                "Mini Bar",
                "Airport Shuttle"
            ],
            exclusions: ["Gym", "Spa"]
        }
    ];
      

    return (
        <div>
            {/* <h3 className="text-lg font-bold text-indig-900 mb-1 text-center">Select Alternative</h3> */}
            {hotelalternatives.map((alt, index) => (
                <div key={index} className="bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden mb-3" >
                    <div className='bg-gray-100 p-1'>
                        <h3 className="text-sm font-bold text-black">{alt.name}</h3>
                        <div className="flex justify-between items-center text-gray-500 text-xs">
                            <span>{alt.dateRange}</span>
                        </div>
                    </div>
                    <div className="flex p-2 relative">
                        <img
                            src={alt.image}
                            alt="Hotel Image"
                            className="w-40 h-auto rounded-lg mr-6"
                        />
                        <div className="flex-1">
                            <div className="flex items-center text-xs mb-1">
                                <span className="flex items-center">
                                    <span className="mr-2 font-bold  text-black">Check-In Time:</span>
                                    <span className="mr-4">{alt.checkInTime}</span>
                                </span>
                                <span className="flex items-center">
                                    <span className="mr-2 font-bold text-black">Check-Out Time:</span>
                                    <span className="mr-4">{alt.checkOutTime}</span>
                                </span>
                            </div>

                            <div className="flex-1">
                                <div className="text-xs mb-1">
                                    {/* First row: Refundable and Accommodates */}
                                    <div className="flex items-center mb-1">
                                        <span className="flex items-center mr-4">
                                            <img
                                                src={alt.isRefundable ? refundable : nonrefundable} // Use the imported images
                                                alt="Refundable Icon"
                                                className="w-4 h-4 mr-1"
                                            />
                                            <span>{alt.isRefundable ? "Refundable" : "Non-Refundable"}</span>
                                        </span>
                                        <span className="flex items-center">
                                            <img
                                                src={group}
                                                alt="group-icon"
                                                className="w-4 h-4 mr-1"
                                            />
                                            <span className='mr-10'>{alt.accommodates}</span>
                                            <span className="mr-10 font-bold text-black bg-gray-200 p-1">{alt.rating}Hotel</span>
                                            <span className="mr-2 font-bold text-black bg-gray-200 p-1">{alt.reviewScore}</span>
                                            <span>{alt.reviewSource}</span>

                                        </span>
                                    </div>

                                    {/* Second row: Rating and Review */}
                                    {/* <div className="flex items-center">
      <span className="mr-12 font-bold text-indigo-900 bg-gray-200 p-1">{alt.rating}Hotel</span>
      <span className="mr-2 font-bold text-indigo-900 bg-gray-200 p-1">{alt.reviewScore}</span>
      <span>{alt.reviewSource}</span>
    </div> */}
                                </div>
                            </div>


                            <div className="relative grid grid-cols-2 gap-1 text-xs mb-0 mt-0">
                                <div className="flex flex-col inclusions" style={{ fontSize: "xs" }}>
                                    <span className="text-left mb-0" style={{ textDecoration: "underline", fontWeight: "bold", color: "black" }}>Inclusions</span>
                                    {alt.inclusions.map((item, idx) => (
                                        <div key={idx} className="flex">
                    
                                            <span>
                                                <svg className="w-4 h-4 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <span className='m-0'>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col exclusions" style={{ fontSize: "xs" }}>
                                    <span className="text-left mb-0" style={{ textDecoration: "underline", fontWeight: "bold", color: "black" }}>Exclusions</span>
                                    {alt.exclusions.map((item, idx) => (
                                        <div key={idx} className="flex">
                                            <span>
                                                <svg className="w-4 h-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button className='flex justify-center absolute bottom-1 right-1 font-bold text-indigo-900 w-16 h-6 border border-indigo-900 rounded-lg text-xs'>Select</Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div> 
    
    );
};

export default HotelAlternatives;



