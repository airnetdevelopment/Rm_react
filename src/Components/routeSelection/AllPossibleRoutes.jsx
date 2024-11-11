import { ScrollPanel } from "primereact/scrollpanel";
import React, { useEffect } from "react";
import { Card } from "primereact/card";
import railway from "../../assets/icons/railway.png";
import { useDispatch } from "react-redux";
import { updateSelectedRoute } from "../../redux/features/routeSelectionSlice";
import { useNavigate } from "react-router-dom";

const cardData = [
    {
        title: "Delhi",
        description: "The capital of India",
        badgeContent: "Cheapest",

    },
    {
        title: "Rome",
        description: "The capital of Italy",
        badgeContent: "Fastest",
    },
    {
        title: "Venice",
        description: "Famous for its canals",
        badgeContent: "Cheapest"
    },
    {
        title: "Milan",
        description: "Known for fashion and design",
        badgeContent: "Cheapest",
    },
];

const AllPossibleRoutes = ({allRoutes}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const trimToTwoDecimals = (number)=> {
        return Math.trunc(number * 100) / 100;
    };
    
    const getTimeInHrMin = (seconds)=> {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
      
        if (hrs > 0 && mins > 0) {
            return `${hrs} hr${hrs > 1 ? "s" : ""} ${mins} min${mins > 1 ? "s" : ""}`;
        } else if (hrs > 0) {
            return `${hrs} hr${hrs > 1 ? "s" : ""}`;
        } else if (mins > 0) {
            return `${mins} min${mins > 1 ? "s" : ""}`;
        } else {
            return "0 min";
        }
    };

    const handleSelectRoute = (route)=>{
        dispatch(updateSelectedRoute(route));  
        navigate(`/package/${route.unique_key}`);
    };

    useEffect(()=>{
        console.log(allRoutes);
    },[allRoutes]);
    
    
    return (
        <main>
            <div className="flex-auto">
                <ScrollPanel style={{ width: "100%", height: "400px", border: "1px solid black" }} className="p-0">

                    {/* Card container */}
                    <div className="p-col-12 p-md-10 p-lg-7">
                        {/* <h2 className="p-text-center">Travel Destinations</h2> */}
                        {allRoutes && allRoutes.length>0 && allRoutes.map((details, index) => (
                            <div className="p-mb-2  " key={index}> {/* Margin bottom for spacing */}
                                <Card className="relative h-24 mb-3 p-1 rounded-lg border-2  border-gray-200 shadow-md hover:bg-blue-100 " onClick={()=>handleSelectRoute(details)}  >
                                  
                                    {/* <Badge value={card.badgeContent} severity={card.badgeContent === "Fastest" ? "danger" : "success"}  // 'danger' for red, 'success' for green */}
                                    {/* style={{ position: "absolute", top: "0px",right: "10px", backgroundColor: card.badgeContent === "Fastest" ? "red" : "green"  // Red for 'Fastest', Green for 'Cheapest' */}
                                    {/* }}  */}
                                    {/* className="absolute top-1 left-1 w-24" /> */}

                                    <div className="flex flex-row justify-around items-center p-2 mt-[-12px] mb-4">

                                        {details.route && details.route.length>0 && details.route.map((route,idx)=>(
                                            <div className="flex flex-row text-center" key={idx} >
                                                <span className="text-indigo-900 font-semibold">{route.name} </span>
                                                <span className="text-indigo-900">
                                                    <img src={railway} alt="duration icon" className="inline-block w-4 h-4" /> {/* Replace with actual image path */}
                                                </span>
                                            </div>
                                        ))}
                
                                    </div>

                                    <div className="flex flex-row bg-gray-100 justify-around items-center p-2 mt-[-15px] h-6">
                                        {/* Field 1 */}
                                        <div className="flex flex-row text-center">
                                            <span className="text-gray-700 font-semibold">Estd. Cost: </span>
                                            <span className="text-gray-900"> {trimToTwoDecimals(details.fare) }</span>
                                        </div>
    
                                        {/* Field 2 */}
                                        <div className="flex flex-row text-center">
                                            <span className="text-gray-700 font-semibold">Incentive: </span>
                                            <span className="text-gray-900"> not found</span>
                                        </div>

                                        <div className="flex flex-row text-center">
                                            <span className="text-gray-700 font-semibold">Duration: </span>
                                            <span className="text-gray-900"> {getTimeInHrMin(details.time)}</span>
                                        </div>
                
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </ScrollPanel>
            </div>
        </main>
    );
};

export default AllPossibleRoutes;