import React, { useEffect, useState } from "react";
import CityEvents from "./preview/CityEvents";
import TransitCard from "./preview/TransitCard";
import FlightCard from "./preview/FlightCard";
import { events } from "../../Pages/Package/PackageArray";

const TabularView = () => {

    const [eventsArr, setEventsArr] = useState(events);

    useEffect(() => {
        console.log(eventsArr);
    }, [eventsArr]);
    

    return (
        <main className="flex flex-col gap-4" >
            {eventsArr && eventsArr.length > 0 && eventsArr.map((e, index) => (
                <React.Fragment key={index}>
                    {e.eventType === "interCity" && e.commuteType === "flightOnly" ? (
                        <FlightCard flightEvents={e.events} /> 
                    ) : e.eventType === "interCity" && e.commuteType === "transitOnly" ?(
                        <TransitCard  transitEvents={e.events} />
                    ) : e.eventType === "interCity" && e.commuteType === "both" ?(
                        <TransitCard  mixEvents={e.events} />
                    ) : (
                        <CityEvents key={index} cityEvents={e.events}  />
                    )}
                </React.Fragment>
            ))}

           
        </main>
    );
};

export default TabularView;