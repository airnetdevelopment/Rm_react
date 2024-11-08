import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import "../../../css/EventTable.css";
import Lounge from "../../../Pages/Package/Lounge";
import Leisure from "../../../Pages/Package/Leisure";
import Commute from "../../../Pages/Package/Commute";
import Sight from "../../../Pages/Package/Sight";


const EventsOnDate = ({ dayEvents }) => {


    // Check functions for event types
    const isCommuteEvent = (event) => {
        return event.type === "commute-sight-hotel" || 
           event.type === "commute-hotel-sight" || 
           event.type === "commute-hotel-airport" || 
           event.type === "commute-airport-hotel";
    };

    const isLeisureEvent = (event) => {
        return event.type === "leisure";
    };

    const isLoungeEvent = (event) => { 
        return event.type === "return-lounge" || event.type === "incoming-lounge";
    };


    const isSightEvent = (event) => {
        return event.type === "sight";
    };

 
    // Render components dynamically based on event type
    const renderEventComponent = (event) => {
        if (isCommuteEvent(event)) {
            return <Commute title={event.title} />;
        } else if (isLoungeEvent(event)) {
            return <Lounge title={event.title} />;
        } else if (isLeisureEvent(event)) {
            return <Leisure title={event.title} />;
        } else if (isSightEvent(event)) {
            return <Sight title={event.title} />; // Customize for sight events if needed
        }
        // Add more conditions for other types of events
        return <div>{event.title}</div>;
    };

    // Template to render events in separate divs in the same row
    const eventTemplate = (eventsOnDate) => {
        return (
            <div className='flex overflow-x-auto w-[44rem]'>
                {eventsOnDate.map((event, index) => (
            
                    <div key={index} className="event-div">
                        {renderEventComponent(event)} {/* Render event components */}
                    </div>
            
                ))}
            </div>
        );
    };

    // useEffect(() => {
    //     console.log(dayEvents);
    // }, [dayEvents]);
    

    return (
        <div className='event-table-container'>
            { eventTemplate(dayEvents)  }
        </div>
    );
};

export default EventsOnDate;
