
import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css"; // Adjust theme as needed
import "primereact/resources/primereact.min.css";
import { Tooltip } from "primereact/tooltip";
import nonrefundable from "../../assets/Iconslatestpackage/nonrefundable.png";
import refundable from "../../assets/Iconslatestpackage/refundable.png";
import notavailable from "../../assets/Iconslatestpackage/notavailable.png";
import available from "../../assets/Iconslatestpackage/available.png";
import { Image } from "primereact/image";
import timeleft from "../../assets/Iconslatestpackage/time-left.png";
import binocular from "../../assets/Iconslatestpackage/binocular.png";

const SightseeingCategoryWise = () => {
    return (
        <div className="w-[50rem] mb-6 bg-white rounded-lg">
            <h3 className="text-lg font-bold text-black text-left mb-4">SIGHTSEEINGS</h3>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
                <div className="flex justify-between items-center border-b border-gray-200 p-4 bg-gray-100">
                    <div>
                        <h3 className="text-lg font-bold text-black">Skip the Line Duomo and Rooftop Guided Tour</h3>
                        <div className="flex items-center text-gray-500 text-sm mt-1">
                            <span>Thu, Sept 03, 2024</span>
                            <span className="mx-2">⟶</span>
                            <span>Sat, Sept 05, 2024</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Tooltip target=".info-button" content="More Info" />
                        <Button label="i" className="info-button text-gray-500 border border-black h-8 w-6" />
                        <Tooltip target=".change-button" content="Change Hotel" />
                        <Button label="Change" className="change-button text-gray-500 border border-black h-8 w-16" />
                    </div>
                </div>

                <div className="flex p-4 relative">
                    <img 
                        src={available}
                        alt="available" 
                        className="absolute top-2 right-2 w-24 h-6 rounded-lg mr-0"
                    />
                    <img 
                        src="hotel-image.jpg" 
                        alt="Sight Image" 
                        className="w-48 h-auto rounded-lg mr-6" 
                    />
                    <div className="flex-1">
                        <div className="flex items-center text-sm mb-2">
                            <span className="flex items-center">
                                <img 
                                    src={timeleft} 
                                    alt="Time Icon" 
                                    className="w-6 h-6 mr-2"
                                />
                                <span className="mr-4">2 Hrs</span>
                            </span>
                            <span className="flex items-center">
                                <img 
                                    src={binocular}
                                    alt="Sightseeing Icon" 
                                    className="w-6 h-6 mr-2"
                                />
                                <span className="mr-4">Sightseeing</span>
                            </span>
                            <span className="flex items-center">
                                <img 
                                    src={refundable} 
                                    alt="Refundable Icon" 
                                    className="w-6 h-6 mr-2"
                                />
                                <span className="mr-4">Refundable</span>
                            </span>
                            <span className="flex items-center">
                                <span className="mr-4 underline">Tour Plans</span>
                            </span>
                        </div>

                        <div className="flex items-center text-sm mb-2">
                            <span className="flex items-center">
                                <span className="mr-4 font-bold">Start Time:</span>
                                <span className="mr-4">12:00 pm</span>
                            </span>
                            <span className="flex items-center">
                                <span className="mr-4 font-bold">End Time:</span>
                                <span className="mr-4">2:00 pm</span>
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm mb-4 mt-2">
                            <div className="flex flex-col inclusions" style={{ fontSize: "sm" }}>
                                <span className='text-left mb-2' style={{ textDecoration: "underline", fontSize: "16px",fontWeight:"bold",color:"black" }}>Inclusions</span>
                                <div className="flex">
                                    <span>
                                        <svg className="w-5 h-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span>Non-smoking rooms</span>
                                </div>

                                <div className="flex">
                                    <span>
                                        <svg className="w-5 h-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span>Free WiFi</span>
                                </div>

                                <div className="flex">
                                    <span>
                                        <svg className="w-5 h-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span>Bed And Breakfast</span>
                                </div>

                                <div className="flex">
                                    <span>
                                        <svg className="w-5 h-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span>Air Conditioner</span>
                                </div>
                            </div>

                            <div className="flex flex-col exclusions" style={{ fontSize: "sm" }}>
                                <span className='text-left mb-2' style={{ fontSize: "16px", textDecoration: "underline",fontWeight:"bold",color:"black" }}>Exclusions</span>
                                <div className="flex">
                                    <span>
                                        <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </span>
                                    <span>Terrace</span>
                                </div>
                                <div className="flex">
                                    <span>
                                        <svg className="w-5 h-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </span>
                                    <span>Bar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SightseeingCategoryWise;
