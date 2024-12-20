import { useEffect, useState } from "react";
import { parseDateTimeWithZ } from "../../../../utils/formattime";
import bus from "../../../../assets/icons/bus.png";

const Commute = ({event}) => {
    
    const [eventDetails,setEventDetails]= useState(null);
    
    useEffect(() => {
        setEventDetails(event.event);
    }, []);

    return (
        <>
            {eventDetails && (
                <div className="h-full flex items-center p-2 m-1 rounded">
                    {/* <div className='flex flex-col text-center flex-grow'>
                        <h3 className="font-bold border-2 border-gray-600 rounded-full w-6" >C</h3>
                        <div className='font-bold underline'>{parseDateTimeWithZ(eventDetails.start).time }-{parseDateTimeWithZ(eventDetails.end).time }</div>
                        <div className='mb-1'>
                            {eventDetails.title}
                        </div>
                    </div> */}
                    <img src={bus} alt="" className="h-6" />
                </div>
            )}
        </>
    );
};

export default Commute;
