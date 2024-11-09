// TransitCard.jsx
import railway from "../../../assets/Iconslatestpackage/railway.png";
import { Button } from "primereact/button";
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
];

// Helper function to format the date
const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit", hour12: false };
    return new Date(dateString).toLocaleString("en-GB", options).replace(",", "");
};

// Helper function to extract the relevant title part
const extractTitle = (title) => {
    const parts = title.split(": ");
    return parts.length > 1 ? parts[1] : title; // Return the part after the colon
};

const TransitCard = ({transitEvents}) => {
    
    return (
        <div className="ml-4 flex flex-wrap p-2 shadow-md mt-4 relative mr-4 w-[50rem]">
            {transitEventsData.map(event => (
                <div key={event.id} className="w-full md:w-1/2 lg:w-1/3 p-2 flex rounded-lg items-center justify-center">
                    <div className="w-1/3 h-12">
                        <img
                            src={railway} // Replace with the actual image URL
                            alt="Transit"
                            className="rounded-lg h-12 w-16"
                        />
                    </div>
                    <div className="bg-white p-4 h-28 text-xs text-left  w-[28rem]">
                        <h3 className="text-xs font-bold mb-1">{extractTitle(event.title)}</h3>
                        <p>
                            {formatDate(event.start)} - {formatDate(event.end)}
                        </p>
                        <p>{event.description}</p>
                    </div>
                </div>
            ))}

            <Button className='bg-red-400 text-sm text-white h-8 space-x-2 w-36 rounded-md bottom-1 absolute right-1'>Show Details</Button>
        </div>
    );
};

export default TransitCard;
