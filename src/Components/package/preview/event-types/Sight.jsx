import { useEffect, useState } from "react";
import { parseDateTimeWithZ } from "../../../../utils/formattime";


const Sight = ({event}) => {
    
    const [sightDetails,setSightDetails]= useState(null);

    useEffect(() => {
        setSightDetails(event.event);
    }, []);
    

    return (
        <>
            {sightDetails && (
                <div className="shadow-md event-div p-2 m-1 rounded flex">
                    <div className='flex flex-col text-center flex-grow'>
                        <div className='font-bold underline'>{parseDateTimeWithZ(sightDetails.start).time }-{parseDateTimeWithZ(sightDetails.end).time }</div>
                        <div className='mb-1'>
                            {sightDetails.title}
                        </div>
                    </div>
                </div>
            )}
        </>
       
    );
};

export default Sight;
