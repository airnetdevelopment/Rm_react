import React, { useState } from 'react';
import { Tooltip } from 'primereact/tooltip'; // Import Tooltip from PrimeReact
import { Button } from 'primereact/button'; // Import Button from PrimeReact
import 'primeicons/primeicons.css';

const FlightCard = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const getStopsImageUrl = () => {
        // Replace with your logic for getting the image URL
        // return 'path/to/stops/image.png';
    };

    const getNumberOfFlights = () => {
        // Replace with your logic for calculating the number of flights
        // return flightDetails.layovers.length || 0;
    };

    const getImageSrc = () => {
        // Replace with your logic for getting the status image
        // return 'path/to/status/image.png';
    };

    return (
        <main style={{ position: 'relative', overflow: 'visible' }} className="w-[53rem]">
            <div className="flightCard bg-white rounded-md shadow-xl w-full flex items-center justify-center gap-4" style={{ overflow: 'visible' }}>
                <div className="airline w-[8rem]">
                    {/* <div className="airline-section1">
                        {flightDetails.airlines.map((airline, index) => (
                            <div key={index} className="airline-section1-logo">
                                <p className="text-md font-medium">{airline.name}</p>
                                <p className="text-xs">{airline.flightNumber}</p>
                            </div>
                        ))}
                    </div> */}
                </div>

                <div className="timings w-[20rem] flex items-center justify-evenly" style={{ overflow: 'visible' }}>
                    <div className="timings-city-stats">
                        <h3>8:45</h3>
                        <h4>Delhi</h4>
                        <h3>3 Sep</h3>
                    </div>

                    <div className="timings-duration" style={{ position: 'relative' }}>
                        <h4>8hr 35min</h4>

                        <Button
                            type="button"
                            className="relative"
                            icon="pi pi-info-circle"
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                            // tooltip={showTooltip && flightDetails.layovers.length > 0 ? (
                                // <div className="w-[10rem] p-2 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-sm">
                                    // <div className="flex flex-col items-center justify-center gap-2">
                                        /* {flightDetails.layovers.map((layover, index) => (
                                            <div key={index} className="flex flex-col items-center justify-center text-xs font-light gap-1">
                                                <p>Plane change</p>
                                                <p>aa</p>
                                                <p>aa</p>
                                            </div>
                                        ))} */
                                    // </div>
                                // </div>
                            // ) : null}
                        />

                        <h4>{getNumberOfFlights()}</h4>
                    </div>

                    <div className="timings-city-stats">
                        <h3>13:50</h3>
                        <h4>Milan</h4>
                        <h3>3 Sep</h3>
                    </div>
                </div>

                <div className="w-[7rem] ml-10 h-full flex items-center justify-center gap-10">
                    <div className="w-1/2 h-full flex justify-center items-center">
                        <img
                            src="../../../assets/icons/pencil.png"
                            alt="edit"
                            className="w-4 h-4 cursor-pointer"
                            onClick={() => setIsTooltipVisible(!isTooltipVisible)}
                        />
                    </div>
                    <div className="w-1/2 h-full flex justify-center items-center">
                        <img src={getImageSrc()} alt="status" className="h-6 w-8" />
                    </div>
                </div>
            </div>

            {isTooltipVisible && (
                <div className={`tooltip-content`}>
                    <div className="flex">
                        <Button className="cta" icon="pi pi-refresh">
                            Replace
                        </Button>
                        <Button className="cta" icon="pi pi-pencil">
                            Edit
                        </Button>
                        <Button className="cta" icon="pi pi-trash">
                            Remove
                        </Button>
                    </div>
                </div>
            )}
        </main>
    );
};

export default FlightCard;
