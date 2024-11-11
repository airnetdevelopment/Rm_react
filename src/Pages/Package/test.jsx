import React from "react";
import * as ReactTooltip from "react-tooltip";

const FlightDetails = () => {
    // Static data for airlines
    const airlines = [
        { name: "Air India", flightNumber: "AI202" },
        { name: "Indigo", flightNumber: "6E102" },
        { name: "Vistara", flightNumber: "UK202" },
        { name: "SpiceJet", flightNumber: "SG105" },
    ];

    return (
        <div className="flex items-center">
            {/* Display first two airlines */}
            {airlines.slice(0, 2).map((a, idx) => (
                <div className="flex flex-col ml-4 mr-4 w-16" key={idx}>
                    <div className="text-[10px] text-black font-bold truncate">{a.name}</div>
                    <div className="text-[10px] text-black">{a.flightNumber}</div>
                </div>
            ))}

            {/* Tooltip for additional airlines */}
            {airlines.length > 2 && (
                <div>
                    {/* "+N more" text with tooltip trigger */}
                    <div
                        className="ml-5 text-blue-500 text-sm font-bold cursor-pointer"
                        data-tip
                        data-for="airlinesTooltip"
                    >
            +{airlines.length - 2} more
                    </div>

                    {/* Tooltip component for additional airlines */}
                    <ReactTooltip id="airlinesTooltip" place="top" type="dark" effect="solid" className="w-[200px]">
                        <div className="flex flex-col">
                            {airlines.slice(2).map((a, idx) => (
                                <div key={idx} className="mb-1">
                                    <div className="text-[11px] font-bold">{a.name}</div>
                                    <div className="text-[10px]">{a.flightNumber}</div>
                                </div>
                            ))}
                        </div>
                    </ReactTooltip>
                </div>
            )}
        </div>
    );
};

export default FlightDetails;
