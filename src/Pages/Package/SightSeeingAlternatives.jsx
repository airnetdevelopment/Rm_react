import React, { useState } from "react";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import nonrefundable from "../../assets/Iconslatestpackage/icons/nonrefundable.png";
import refundable from "../../assets/Iconslatestpackage/icons/refundable.png";
import notavailable from "../../assets/Iconslatestpackage/icons/notavailable.png";
import available from "../../assets/Iconslatestpackage/icons/available.png";
import { Image } from "primereact/image";
import timeleft from "../../assets/Iconslatestpackage/icons/time-left.png";
import binocular from "../../assets/Iconslatestpackage/icons/binocular.png";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";

const SightSeeingAlternatives = () => {

    const sightseeingalternatives = [
        {
            title: "Skip the Line Duomo and Rooftop Guided Tour - Alternative 1",
            dateRange: "Thu, Sept 03, 2024 ⟶ Sat, Sept 05, 2024",
            startTime: "12:00 pm",
            endTime: "2:00 pm",
            inclusions: [
                "Non-smoking rooms",
                "Free WiFi",
                "Bed And Breakfast",
                "Air Conditioner"
            ],
            exclusions: ["Terrace", "Bar"],
            image: "hotel-image.jpg",
            availability: "Available",
            timeLeft: "1 Hr",
            tourType: "Sightseeing",
            isRefundable: false
        },
        {
            title: "Skip the Line Duomo and Rooftop Guided Tour - Alternative 2",
            dateRange: "Mon, Sept 07, 2024 ⟶ Wed, Sept 09, 2024",
            startTime: "2:00 pm",
            endTime: "4:00 pm",
            inclusions: [
                "Non-smoking rooms",
                "Free WiFi",
                "Full Breakfast",
                "Swimming Pool"
            ],
            exclusions: ["Bar", "Elevator"],
            image: "hotel-image.jpg",
            availability: "Not Available",
            timeLeft: "1 Hr",
            tourType: "Sightseeing",
            isRefundable: false
        },
        {
            title: "Skip the Line Duomo and Rooftop Guided Tour - Alternative 3",
            dateRange: "Tue, Sept 10, 2024 ⟶ Thu, Sept 12, 2024",
            startTime: "10:00 am",
            endTime: "12:00 pm",
            inclusions: [
                "Non-smoking rooms",
                "Free WiFi",
                "Full Breakfast",
                "Gym"
            ],
            exclusions: ["Restaurant", "Spa"],
            image: "hotel-image.jpg",
            availability: "Available",
            timeLeft: "1 Hr",
            tourType: "Sightseeing",
            isRefundable: false
        },
        {
            title: "Skip the Line Duomo and Rooftop Guided Tour - Alternative 4",
            dateRange: "Fri, Sept 14, 2024 ⟶ Sun, Sept 16, 2024",
            startTime: "1:00 pm",
            endTime: "3:00 pm",
            inclusions: [
                "Non-smoking rooms",
                "Free WiFi",
                "Half Board",
                "Parking"
            ],
            exclusions: ["Room Service", "Swimming Pool"],
            image: "hotel-image.jpg",
            availability: "Available",
            timeLeft: "1 Hr",
            tourType: "Sightseeing",
            isRefundable: true
        },
        {
            title: "Skip the Line Duomo and Rooftop Guided Tour - Alternative 5",
            dateRange: "Mon, Sept 17, 2024 ⟶ Wed, Sept 19, 2024",
            startTime: "11:00 am",
            endTime: "1:00 pm",
            inclusions: [
                "Non-smoking rooms",
                "Free WiFi",
                "Bed And Breakfast",
                "Airport Shuttle"
            ],
            exclusions: ["Lounge", "Bar"],
            image: "hotel-image.jpg",
            availability: "Not Available", timeLeft: "1 Hr",
            tourType: "Sightseeing",
            isRefundable: true
        }
    ];


    return (
        <div>
            {/* <h3 className="text-lg font-bold text-indig-900 mb-1 text-center">Select Alternative</h3> */}
            {sightseeingalternatives.map((alt, index) => (
                <div key={index} className="bg-white shadow-lg border border-gray-300 rounded-lg overflow-hidden mb-3" >
                    <div className='bg-gray-100 p-1'>
                        <h3 className="text-sm font-bold text-black">{alt.title}</h3>
                        <div className="flex justify-between items-center text-gray-500 text-xs">
                            <span>{alt.dateRange}</span>
                            <span className="flex items-center">
                                <span className="mr-4 underline text-indigo-900 font-bold">Tour Plans</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex p-2 relative">
                        <img
                            src={alt.image}
                            alt="Sight Image"
                            className="w-40 h-auto rounded-lg mr-6"
                        />
                        <div className="flex-1">
                            <div className="flex items-center text-xs mb-1">
                                <span className="flex items-center">
                                    <span className="mr-2 font-bold text-indigo-900">Start Time:</span>
                                    <span className="mr-4">{alt.startTime}</span>
                                </span>
                                <span className="flex items-center">
                                    <span className="mr-2 font-bold text-indigo-900">End Time:</span>
                                    <span className="mr-4">{alt.endTime}</span>
                                </span>
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center text-xs mb-1">
                                    <span className="flex items-center">
                                        <img
                                            src={timeleft}
                                            alt="Time Icon"
                                            className="w-4 h-4 mr-2"
                                        />
                                        <span className="mr-4">{alt.timeLeft}</span>
                                    </span>
                                    <span className="flex items-center">
                                        <img
                                            src={binocular}
                                            alt="Sightseeing Icon"
                                            className="w-4 h-4 mr-2"
                                        />
                                        <span className="mr-4">{alt.tourType}</span>
                                    </span>
                                    <span className="flex items-center">
                                        <img
                                            src={alt.isRefundable ? refundable : nonrefundable} // Use the imported images
                                            alt="Refundable Icon"
                                            className="w-4 h-4 mr-2"
                                        />
                                        <span className="mr-4">{alt.isRefundable ? "Refundable" : "Non-Refundable"}</span>
                                    </span>
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

export default SightSeeingAlternatives;