import "primereact/resources/themes/saga-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import "../../../css/EventTable.css";
import Lounge from "./event-types/Lounge";
import Commute from "./event-types/Commute";
import Sight from "./event-types/Sight";
import Leisure from "./event-types/Leisure";


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
            return <Commute event={event} />;
        } else if (isLoungeEvent(event)) {
            return <Lounge event={event} />;
        } else if (isLeisureEvent(event)) {
            return <Leisure event={event} />;
        } else if (isSightEvent(event)) {
            return <Sight event={event} />; // Customize for sight events if needed
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

    return (
        <div className='event-table-container'>
            { eventTemplate(dayEvents)  }
        </div>
    );
};

export default EventsOnDate;
