import React, { useEffect } from "react";
import { Button } from "primereact/button";
import EventsOnDate from "./EventsOnDate";

const CityEvents = ({cityEvents}) => {

    const temperatureValue = 24; // Base temperature value

    return (
        <>
            <div className="text-indigo-900 font-semibold border-2 border-indigo-900 rounded-md w-full">
                <div className="flex flex-row justify-between  bg-indigo-900 pl-3 pr-3 items-center">
                    <div className="text-white text-lg h-12 items-center font-bold p-2">4 Nights in Milan</div>
                    <div className="text-xl font-bold flex items-center">
                        <span className="mr-1 text-white">{temperatureValue}</span>
                        <span className="text-lg font-bold text-white">
                            <sup className="text-white">°C</sup>
                        </span>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center border-b-2 border-indigo-900">
                    <div className="text-indigo-900 text-md text-left p-1 ml-3">Stay @ iH Hotels Milano Ambasciatori </div>
                    <div className="mr-4 p-2"> 
                        <Button label="Select Rooms" className="p-button-info text-xs border border-indigo-900" raised style={{padding:"3px"}}
                        />
                    </div>
                </div>

                <table className="flex flex-col" >
                    {cityEvents && cityEvents.length>0 && cityEvents.map((day,idx)=>
                        (  
                            <div key={idx}>
                                <tr className="flex items-center">
                                    <td>
                                        <div>
                                            {day.date}
                                        </div>
                                    </td>
                                    <td>
                                        <EventsOnDate dayEvents={day.eventsOnDate} />
                                    </td>
                                </tr>
                            </div>
                        )
                    )}
                </table>
            </div>
        </>
    );
};
  
export default CityEvents;