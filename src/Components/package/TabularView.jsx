import React, { useEffect, useState } from "react";
import CityEvents from "./preview/CityEvents";
import TransitCard from "../../Pages/Package/Transit";
import FlightCard from "./FlightCard";
import { events } from "../../Pages/Package/PackageArray";

const TabularView = () => {

    const [eventsArr, setEventsArr] = useState(events);


    return (
        <main>
            {eventsArr && eventsArr.length > 0 && eventsArr.map((e, index) => (
                <React.Fragment key={index}>
                    {e.eventType === "interCity" ? (
                        e.events.map((event, eventIndex) => (
                            event.type === "flight" ? 
                                <FlightCard key={eventIndex} event={event} /> : 
                                <TransitCard key={eventIndex} event={event} />
                        ))
                    ) : (
                        <CityEvents key={index} cityEvents={e.events}  />
                    )}
                </React.Fragment>
            ))}

           
        </main>
    );
};

export default TabularView;