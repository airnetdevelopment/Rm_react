import "primereact/resources/primereact.min.css"; 
import { useEffect, useRef, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import RouteMap from "./Map";
import "primereact/resources/themes/saga-blue/theme.css";  // PrimeReact theme
import TravellingDetails from "../../Components/routeSelection/TravellingDetails";
import { Card } from "primereact/card";
import AllPossibleRoutes from "../../Components/routeSelection/AllPossibleRoutes";
import { ClimbingBoxLoader, RingLoader } from "react-spinners";
import { useSelector,useDispatch } from "react-redux";
import { getAllPossibleRoutesThunk } from "../../redux/features/routeSelectionSlice";
import { useNavigate } from "react-router-dom";



const tripData = [
    {
        from: "Delhi",
        to: "Venice",
        transferIcon: "plane", // Use an icon identifier like 'plane', 'train', etc.
        estimatedCost: 500, // Cost in the desired currency
        incentive: 50, // Incentive or discount
        duration: "7h 45m", // Flight or travel time
    },
    {
        from: "Venice",
        to: "Rome",
        transferIcon: "train",
        estimatedCost: 150,
        incentive: 10,
        duration: "3h 30m",
    },
    {
        from: "Rome",
        to: "Milan",
        transferIcon: "bus",
        estimatedCost: 100,
        incentive: 5,
        duration: "6h 15m",
    },
    {
        from: "Milan",
        to: "Delhi",
        transferIcon: "plane",
        estimatedCost: 600,
        incentive: 70,
        duration: "8h 50m",
    }
];

const cities = [
    { id: 1, name: "Delhi", description: "Departure" },
    { id: 2, name: "Rome", description: "2 Nights" },
    { id: 3, name: "Venice", description: "3 Nights" },
    { id: 4, name: "Milan", description: "3 Nights" },
    { id: 5, name: "Delhi", description: "Arrival" },
];
    
const sortOptions = [
    { label: "Ascending Cost", value: "ascendingcost" },
    { label: "Descending Cost", value: "descendingcost" },
    { label: "Ascending Incentive", value: "ascendingincentive" },
    { label: "Descending Incentive", value: "descendingcost" },
    { label: "Ascending Duration", value: "asscendingduration" },
    { label: "Descending Duration", value: "descendingduration" },

];

const sortMode = [
    { label: "Flights only", value: "flights" },
    { label: "Flights and Transits", value: "flightstransits" },
    { label: "All", value: "all" }
];

const RouteSelection = () => {

    const travellingDetails = useSelector(state=>state.citySelection);
    const possibleRoutesState = useSelector(state=>state.routeSelection);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loadingFullPage, setLoadingFullPage] = useState(true);
    const [error, setError] = useState(false);
    const [allRoutes,setAllRoutes] = useState([]);

    const didFetchRoutes = useRef(false);

    useEffect(() => {
        console.log(didFetchRoutes);
        if (possibleRoutesState &&  possibleRoutesState?.allRoutes?.routes?.length > 0) {
            setAllRoutes(possibleRoutesState.allRoutes.routes);
        }
        else if (!didFetchRoutes.current) {
            didFetchRoutes.current = true;
            console.log(possibleRoutesState);
            if (travellingDetails?.route.length > 0) {
                console.log("Calling getRoutes");
                getRoutes(travellingDetails);
            } else {
                navigate("/city");
            }
            
        }
    }, []);
    
    const getRoutes = async (travellingDetails) => {
        const payload = {
            end_date: travellingDetails.endDate,
            purposeOfTravel: travellingDetails.purposeOfTravel,
            route: travellingDetails.route,
            start_date: travellingDetails.startDate,
            travelerType: travellingDetails.travelerType,
            travelers: travellingDetails.travelers
        };
    
        try {
            const data = await dispatch(getAllPossibleRoutesThunk(payload)).unwrap();   
            if (data?.routes) {
                setAllRoutes(data.routes);
            }
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoadingFullPage(false);
        }
    };
    

    // Sorting function
    const onSortChange = (e) => {
        const sortField = e.value;
    };
 
    useEffect(() => {
        console.log(allRoutes);
    }, [allRoutes]);

    useEffect(() => {
        console.log(possibleRoutesState);
    }, [possibleRoutesState]);

    if(loadingFullPage){
        return (
            <main className="h-full w-full flex flex-col items-center justify-center gap-10" >
                <RingLoader size={400} color="#0891B2" />
                <h1 className="text-xl font-bold" >Calculating Routes...</h1>
            </main>
        );
    }

    if(!loadingFullPage && error){
        return (
            <main className="h-full w-full flex items-center justify-center" >
                <h1 className="text-5xl font-bold text-blue-600" >Error While Fetching Routes</h1>
            </main>
        );
    }

    return (
        <div>

            {/* head section */}
            <div className='head-section pt-1 pb-1 h-12 w-full bg-gray-100 font-bold mt-[-25px]'>
                <h1 className='text-xl font-bold' >RouteMaestro</h1>
            </div>

            {/* Section1 */}
            <TravellingDetails/>

            <hr/>

            {/* Section2 */}
            <div className='flex flex-row space-x-4 mt-4 h-16'>
                <div className='flex flex-col pt-3 pb-3 h-12 w-full bg-white font-bold mt-[-10px] justify-center items-center'>
                    <h2 className='text-lg font-bold space-x-2 text-red-500 text-center mt-2' >Choose Your Clients Route Of Travel</h2> 
                    <div className="flex flex-row space-x-2 h-10 text-black pt-2">
                        <Dropdown 
                            options={sortOptions} 
                            onChange={onSortChange} 
                            placeholder="Sort By" 
                            style={{ color: "indigo" }}
                            className="text-xs underline focus:border-transparent focus:ring-0 focus:outline-none w-40 placeholder:text-indigo-500" 
                            // className="text-xs text-black underline focus:border-transparent focus:ring-0 focus:outline-none w-40 placeholder:text-[5px]" // Disable ring and outline on focus
                            // className="text-xs border-2 text-black border-gray-200 focus:border-transparent focus:outline-none"
                            panelClassName="w-32 text-[12px]" // Optional: Set the width of the dropdown menu
                        />
                        <Dropdown 
                            value={sortMode} 
                            options={sortMode} 
                            onChange={onSortChange} 
                            placeholder="Select Mode"
                            className="text-xs text-indigo-900 underline focus:border-transparent focus:ring-0 focus:outline-none w-40" // Disable ring and outline on focus
                            // className="text-xs border-2 text-black border-gray-200 focus:border-transparent focus:outline-none"
                            panelClassName="w-32 text-[12px]"
                        />
                    </div>
                </div>

                <div className='flex pt-1 pb-1 h-12 w-full bg-white font-bold mt-[-10px]'>
                    <div className="city-card-container flex flex-row text-sm text-black">
                        {cities.map((city, index) => (
                            <div className="city-card text-sm h-10" key={city.id}>
                                <Card style={{ padding: "10px", height: "50px" }} >
                                    <h2 className="city-card-content font-bold text-md text-indigo-900 mt-[-35px] underline">{city.name} </h2>
            
                                    <p className="text-sm text-black">{city.description}</p>
                                </Card>
                                {/* Add a rule line after every card except the last one */}
                                {index < cities.length - 1 && <div className="rule-line" />}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <hr/>

            {/* section3 */}
            <div className='flex flex-row pt-1 pb-1 h-12 w-full bg-white font-bold' style={{height:"400px"}}>
                {/* column for route options */}
                <div className="w-5/12 bg-gray-100">
                    <div className="p-grid p-justify-center">
                        <AllPossibleRoutes allRoutes={allRoutes} />
                    </div>
                </div>

                {/* column for map */}
                <div className="w-7/12 bg-green-100 border-black border h-full">
                    <RouteMap />
                </div>
            </div>
        </div>
    );
};

export default RouteSelection;
