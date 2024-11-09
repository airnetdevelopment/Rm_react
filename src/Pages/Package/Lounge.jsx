import React from "react";

const Loungedata=[
    {
        "id": "lounge-1723447017528",
        "start": "2024-09-06T11:00:00.000Z",
        "end": "2024-09-06T12:04:00.000Z",
        "type": "return-lounge",
        "title": "Airport Lounge",
        "city_id": 127769,
        "destination_city_id": 148463,
        "related_id": "commute-1723447017528"
    }
      
];

const LoungeData = Loungedata[0];

// Convert ISO date strings to local time using toLocaleTimeString
const startTime = new Date(LoungeData.start).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
});

const endTime = new Date(LoungeData.end).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
});


const Lounge =()=>{

    return(

        <div className="shadow-md w-[14rem] h-[6rem] text-[11px] items-center justify-center text-center flex p-2 m-1 rounded">
            {/* {title}Leisure */}
            <div className='flex flex-col text-center'>
                <div className='font-bold underline'> {startTime}-{endTime} </div>
                <div> {LoungeData.title} </div>
            </div>
        </div>

    );
};

export default Lounge;