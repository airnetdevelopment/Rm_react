// PackageComponent.jsx
import React from 'react';
import FlightCard from './FlightCard';
// import TransitCard from './TransitCard';
import TransitCard from './Transit';
import { eventsArr } from './PackageArray';

const PackageComponent = ({ eventArr }) => {
    return (
        <div>
            {eventArr.map((event, index) => (
                <div key={index}>
                    {event.eventType === 'interCity' && (
                        <>
                            {event.commuteType === 'flightOnly' && (
                                <div className="h-24 w-[52rem]">
                                    <FlightCard eventUid={event.uid} />
                                </div>
                            )}
                            {event.commuteType === 'transitOnly' && (
                                <div className="w-[52rem]">
                                    <TransitCard eventUid={event.uid} />
                                </div>
                            )}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default PackageComponent;
