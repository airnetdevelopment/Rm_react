// TransitCard.jsx
import { useEffect, useState } from "react";
import railway from "../../../assets/icons/railway.png";
import { Button } from "primereact/button";
import { parseDateTimeWithZ } from "../../../utils/formattime";
import { PropagateLoader } from "react-spinners";
// import railway from '../../assets/.png';


const transitEventsData = [
    {
        id: "Milan (Italy)-Venice (Italy)-3",
        title: "Subway: Duomo to Centrale FS",
        start: "2024-09-06T13:34:00.000Z",
        end: "2024-09-06T13:40:00.000Z",
        description: "Mode: Subway, Line: 3",
        city: "Venice (Italy)",
    },
    {
        id: "Milan (Italy)-Venice (Italy)-FR",
        title: "Train: Milano Centrale Railway Station to Stazione di Venezia Santa Lucia",
        start: "2024-09-06T13:45:00.000Z",
        end: "2024-09-06T16:12:00.000Z",
        description: "Mode: Train, Line: FR",
        city: "Venice (Italy)",
    },
    {
        id: "Milan (Italy)-Venice (Italy)-3",
        title: "Subway: Duomo to Centrale FS",
        start: "2024-09-06T13:34:00.000Z",
        end: "2024-09-06T13:40:00.000Z",
        description: "Mode: Subway, Line: 3",
        city: "Venice (Italy)",
    },
    {
        id: "Milan (Italy)-Venice (Italy)-FR",
        title: "Train: Milano Centrale Railway Station to Stazione di Venezia Santa Lucia",
        start: "2024-09-06T13:45:00.000Z",
        end: "2024-09-06T16:12:00.000Z",
        description: "Mode: Train, Line: FR",
        city: "Venice (Italy)",
    }
];

// Helper function to extract the relevant title part
const extractTitle = (title) => {
    const parts = title.split(": ");
    return parts.length > 1 ? parts[1] : title; // Return the part after the colon
};

const TransitCard = ({transitEvents}) => {
    
    const [loading, setLoading] = useState(true);
    const [transitDetailsArr,setTransitDetailsArr] = useState([]);

    useEffect(() => {
        const transits = transitEvents.filter(t=>t.type==="transit").map(t=>t.event);
        setTransitDetailsArr(transits);
        setLoading(false);
    }, [transitEvents]);
    
    if(loading){
        return (
            <div className="my-8" >
                <PropagateLoader color="#453de1" />
            </div>
        );
    }

    return (
        <>
            {transitDetailsArr && transitDetailsArr.length>0 && (
                <div className=" flex flex-wrap shadow-md relative w-full">
                    <div
                        className={`flex gap-3 w-full overflow-x-auto overflow-y-hidden ${
                            transitDetailsArr.length <= 3 ? "justify-center" : "justify-start"
                        }`}
                    >
                        {transitDetailsArr.map((event,idx) => (
                            <>
                                <div key={idx} className="w-[15rem]  p-2 flex rounded-lg items-center justify-evenly shadow-lg">
                                    <div className=" min-w-10 flex items-center justify-center ">
                                        <img
                                            src={railway} 
                                            alt="Transit"
                                            className="rounded-lg h-8 w-8"
                                        />
                                    </div>
                                    <div className="bg-white py-3  text-[10px] text-left ">
                                        <h3 className="text-xs font-bold mb-1 text-center">{extractTitle(event.title)}</h3>
                                        <p className="text-xs font-medium text-center" >
                                            {parseDateTimeWithZ(event.start).date} - {parseDateTimeWithZ(event.end).date}
                                        </p>
                                        <p className="text-xs font-medium text-center" >
                                            {parseDateTimeWithZ(event.start).time} - {parseDateTimeWithZ(event.end).time}
                                        </p>
                                        <p className="text-xs font-medium text-center" >{event.description}</p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                 
                </div>
            )}

            {/* <div className='mt-1 mb-1'>
                <Button className='bg-red-400 p-1 text-sm text-white w-24 rounded-md absolute bottom-1 right-1'>Show Details</Button>
            </div> */}
       
        </>
    );
};

export default TransitCard;
