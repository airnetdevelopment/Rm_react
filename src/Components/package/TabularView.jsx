import React, { useEffect, useState } from "react";
import CityEvents from "./preview/CityEvents";
import TransitCard from "./preview/TransitCard";
import FlightCard from "./preview/FlightCard";
import { events } from "../../Pages/Package/PackageArray";
import BothCard from "./preview/BothCard";

const TabularView = () => {

    const [eventsArr, setEventsArr] = useState(events);

    return (
        <main className="w-full flex flex-col items-center gap-4 px-6" >
            {eventsArr && eventsArr.length > 0 && eventsArr.map((e, index) => (
                <React.Fragment key={index}>
                    {e.eventType === "interCity" && e.commuteType === "flightOnly" ? (
                        <FlightCard flightEvents={e.events} /> 
                    ) : e.eventType === "interCity" && e.commuteType === "transitOnly" ?(
                        <TransitCard  transitEvents={e.events} />
                    ) : e.eventType === "interCity" && e.commuteType === "both" ?(
                        <BothCard  mixEvents={e.events} />
                    ) : (
                        <CityEvents key={index} cityEvents={e.events}  />
                    )}
                </React.Fragment>
            ))}

           
        </main>
    );
};

export default TabularView;