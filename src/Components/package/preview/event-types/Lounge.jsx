import { useEffect, useState } from "react";
import { parseDateTimeWithZ } from "../../../../utils/formattime";


const Lounge =({event})=>{
    
    const [eventDetails,setEventDetails]= useState(null);
    
    useEffect(() => {
        setEventDetails(event.event);
    }, []);


    return(
        <>
            {eventDetails && (
                <div className="shadow-md event-div p-2 m-1 rounded">
                    <div className='flex flex-col text-center flex-grow'>
                        <div className='font-bold underline'>{parseDateTimeWithZ(eventDetails.start).time }-{parseDateTimeWithZ(eventDetails.end).time }</div>
                        <div className='mb-1'>
                            {eventDetails.title}
                        </div>
                    </div>
                </div>
            ) }
        </>
    );
};

export default Lounge;