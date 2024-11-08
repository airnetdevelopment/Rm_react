import React, { useState, useEffect,useRef } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import FlightCategoryWise from "./FlightCategoryWise";
import HotelsCategoryWise from "./HotelCategoryWise";
import SightseeingCategoryWise from "./SIghtseeingCategoryWise";
import TransitCategoryWise from "./TransitCategoryWise";
import PaymentDetails from "./Payment1";
import InclusionExclusion from "./InclusionExclusion";
import aeroplane from "../../assets/Iconslatestpackage/icons/aeroplane.png";
import bus from "../../assets/Iconslatestpackage/icons/bus.png";
import { useSelector,useDispatch } from "react-redux";
import { createNewPackageThunk } from "../../redux/features/packageSlice";
import {  HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import TabularPackage from "../../Components/package/TabularView";


const Package = () => {

    const routeSelection =  useSelector(state=>state.routeSelection);
    const packageCreation = useSelector(state=>state.packageCreation);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loadingFullPage, setLoadingFullPage] = useState(false);
    const [error, setError] = useState(false);
    const [finalPackage, setFinalPackage] = useState(null);

    const didFetchPackage = useRef(false);

    // ----------------------------------------------------------------
    const [activeIndex, setActiveIndex] = useState(0);
    const [flightCount, setFlightCount] = useState(3);
    const [hotelCount, setHotelCount] = useState(2);
    const [sightseeingCount, setSightseeingCount] = useState(1);
    const [transitCount, setTransitCount] = useState(2);
    const [isTabClicked, setIsTabClicked] = useState(false); // Track if a tab was clicked
   
    const tabRefs = useRef([]); // Array of refs for each tab content


    const tabContent = [
        {
            header: "TRIPS",
            content: (
                <div className="block">
                    <p>
                        {/* <PackagePage /> */}
                    </p>
                </div>
            )
        },
        {
            header: "INCLUSIONS/EXCLUSIONS",
            content: (
                <div className="block">
                    <p>
                        <InclusionExclusion />
                    </p>
                </div>
            )
        },
        {
            header: (
                <span style={{ color: flightCount > 0 ? "red" : "black" }}>
              FLIGHTS {flightCount > 0 && <sup style={{fontWeight:"bold", position: "relative", top: "-15px", backgroundColor: "red", color: "white", padding: "2px 5px", borderRadius: "4px", fontSize: "0.75em",height:"2px",width:"2px" }}>{flightCount}</sup>}
                </span>
            ),
            content: (
                <div className="block">
                    <p>
                        <FlightCategoryWise />
                    </p>
                </div>
            )
        },
        {
            header: (
                <span style={{ color: hotelCount > 0 ? "red" : "black" }}>
              HOTELS {hotelCount > 0 && <sup style={{fontWeight:"bold",position: "relative", top: "-15px", backgroundColor: "red", color: "white", padding: "2px 5px", borderRadius: "4px", fontSize: "0.75em" }}>{hotelCount}</sup>}
                </span>
            ),
            content: (
                <div className="block">
                    <p>
                        <HotelsCategoryWise />
                    </p>
                </div>
            )
        },
        {
            header: (
                <span style={{ color: sightseeingCount > 0 ? "red" : "black" }}>
              SIGHTSEEINGS {sightseeingCount > 0 && <sup style={{fontWeight:"bold",position: "relative", top: "-15px", backgroundColor: "red", color: "white", padding: "2px 5px", borderRadius: "4px", fontSize: "0.75em" }}>{sightseeingCount}</sup>}
                </span>
            ),
            content: (
                <div className="block">
                    <p>
                        <SightseeingCategoryWise />
                    </p>
                </div>
            )
        },
        {
            header: (
                <span style={{ color: transitCount > 0 ? "red" : "black" }}>
              TRANSITS {transitCount > 0 && <sup style={{position: "relative", top: "-15px", backgroundColor: "red", color: "white", padding: "2px 5px", borderRadius: "4px", fontSize: "0.75em",fontWeight:"bold" }}>{transitCount}</sup>}
                </span>
            ),
            content: (
                <div className="block">
                    <p>
                        <TransitCategoryWise />
                    </p>
                </div>
            )
        }
    ];

    // useEffect(() => {

    //     if (packageCreation &&  packageCreation?.finalPackage) {
    //         setFinalPackage(packageCreation.finalPackage);
    //     }
    //     else if (!didFetchPackage.current) {
    //         didFetchPackage.current = true;
    //         if ( routeSelection?.selectedRoute?.unique_key) {
    //             const routeId = routeSelection.selectedRoute.unique_key;
    //             getNewPackage(routeId);
    //         } else {
    //             navigate("/route");
    //         }
    //     }

    // }, [routeSelection]);

    
    const getNewPackage = async(routeId)=>{
        try{
            const data = await dispatch(createNewPackageThunk(routeId)).unwrap();
            if(data.package){
                setFinalPackage(data);
            }else{
                setError(true);
            }
        }
        catch(err){
            console.error(err);
            setError(true);
        }
        finally{
            setLoadingFullPage(false);
        }
    };

    // tab toggling
    useEffect(() => {
        if (isTabClicked) {
            tabRefs.current[activeIndex]?.scrollIntoView({ behavior: "smooth" });
            setIsTabClicked(false); // Reset after scroll
        }
    }, [activeIndex, isTabClicked]);

    const handleTabChange = (e) => {
        setActiveIndex(e.index);
        setIsTabClicked(true); // Mark that a tab was clicked
    };

    // useEffect(()=>{
    //     console.log(finalPackage);
    // },[finalPackage]);
    
    if(loadingFullPage){
        return (
            <main className="h-full w-full flex flex-col items-center justify-center gap-24 mt-36" >
                <HashLoader size={150} color="#0891B2" />
                <h1 className="text-xl font-bold" >Generating Package...</h1>
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

        <div className='main-section'>
            <div className='flex flex-row'>

                {/* left section */}
                <div className='tabsection'>
                    <div className='card' style={{marginLeft:"10px"}}> 

                        <h1 className='text-indigo-900 font-bold text-2xl underline text-left'>10 nights to Cape Town, Mossel Bay, Milan </h1>
          
                        {/* Tabs at the top */}
                        <div className="card w-[55rem]" style={{ marginLeft: "-10px", marginTop: "1px" }}>
                            <TabView activeIndex={activeIndex} onTabChange={handleTabChange}>
                                {tabContent.map((tab, index) => (
                                    <TabPanel key={index} header={tab.header}></TabPanel>
                                ))}
                            </TabView>
                        </div>

                        <TabularPackage />

                        { /* Display corresponding block of content */}
                        {/* If no tab clicked, display all content, otherwise scroll to clicked tab's content */}
                        {/* {tabContent.map((tab, index) => (
                            <div
                                key={index}
                                ref={(el) => (tabRefs.current[index] = el)} // Set reference for each tab content
                                className="card w-[50rem]"
                            >
                                {(isTabClicked && activeIndex === index) || !isTabClicked ? tab.content : null}
                            </div>
                        ))} */}

                    </div>
                </div>

                {/* right section */}
                <div className='flex flex-col'>

                    <div className='flex justify-center flex-row space-x-4 h-16 mt-4 mr-4'>
                        <Button label="Check Availabilty" severity="danger" className='mt-5 text-white p-2 font-bold text-sm h-10 w-36 bg-red-500'></Button>
                        <Button label="CheckOut Transition" severity="info" className='mt-5 p-2 text-white font-bold text-sm h-10 w-24 bg-indigo-900'></Button>
                    </div>

                    <div className='flex justify-center flex-row space-x-4 h-16 mt-4 mr-4'>
                        <Button label="Holidability Status" severity="danger" className='mt-5 text-white p-2 font-bold text-sm h-10 w-36 bg-yellow-500'></Button>
                        {/* <Button label="CheckOut Transition" severity="info" className='mt-5 p-2 text-white font-bold text-sm h-10 w-24 bg-indigo-900'></Button> */}
                    </div>

                    <div className='mt-4 mb-4'>
                        <h2 className='underline font-bold text-indigo-900'>Share Itinerary</h2>
                        <div className='flex flex-row justify-center space-x-4 h-12 mr-4'></div>
                        <Button label="Whatsapp" severity="info" className='p-2 text-white font-bold text-sm h-10 w-24 bg-indigo-900'></Button>
                        <Button label="Gmail" severity="info" className='p-2 text-white font-bold text-sm h-10 w-24 bg-indigo-900'></Button>
                    </div>

                    <div>
                        <PaymentDetails className="w-[18rem] bg-indigo-900" />
                    </div>

                    <div className='flex justify-center flex-row space-x-4 h-16 mt-4 mr-4'>
                        <Button label="Check Availabilty" severity="danger" className='mt-5 text-white p-2 font-bold text-sm h-10 w-36 bg-red-500'></Button>
                        <Button label="Check Out" severity="danger" className='mt-5 p-2 text-white font-bold text-sm bg-red-500 h-10 w-24'></Button>
                    </div>


                    {/*route section  */}
                    <div className="w-[18rem] bg-white shadow-lg rounded-lg mt-20">
                        <div className="bg-indigo-900 pt-2 pb-1 text-white">
                            <h2 className="text-lg font-semibold mb-5">Route of Travel</h2>
                        </div>

                        <ul className="relative space-y-4 p-3">
                            {/* Vertical line spanning the height of the list */}
                            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300"></div>

                            <li className="flex items-start relative">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-3 w-3 rounded-full bg-indigo-900"></div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-700">IGI Airport, New Delhi</p>
                                </div>
                            </li>

                            <li className="flex items-center ml-8">
                                <img src={bus} alt="Flight" className="h-4 w-4 mr-2" />
                                <p className="text-xs font-medium text-gray-500">Transferred by Bus</p>
                            </li>

                            <li className="flex items-start relative">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-700">Milan Malpensa Airport, Milan</p>
                                </div>
                            </li>

                            <li className="flex items-center ml-8">
                                <img src={aeroplane} alt="Flight" className="h-4 w-4 mr-2" />
                                <p className="text-xs font-medium text-gray-500">Transferred by Flight</p>
                            </li>

                            <li className="flex items-start relative">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-3 w-3 rounded-full bg-indigo-900"></div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-700">Lido Di Jesolo</p>
                                </div>
                            </li>

                            <li className="flex items-center ml-8">
                                <img src={aeroplane} alt="Flight" className="h-4 w-4 mr-2" />
                                <p className="text-xs font-medium text-gray-500">Transferred by Flight</p>
                            </li>

                            <li className="flex items-start relative">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-700">Leonardo da Vinci–Fiumicino Airport, Rome</p>
                                </div>
                            </li>

                            <li className="flex items-center ml-8">
                                <img src={bus} alt="Flight" className="h-4 w-4 mr-2" />
                                <p className="text-xs font-medium text-gray-500">Transferred by Bus</p>
                            </li>

                            <li className="flex items-start relative">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-3 w-3 rounded-full bg-indigo-900"></div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-700">IGI Airport, New Delhi</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-6 mb-4">
                            <Button label="Edit Route" severity="info" raised className='text-sm p-2 bg-indigo-900 text-white mr-4' />
                            <Button label="Add City" severity="info" raised className='text-sm p-2  bg-indigo-900 text-white' />
                            {/* <button class="ml-12 text-sm w-20 h-10 border shadow-md text-indigo-900 hover:underline">Edit Route</button> */}
                            {/* <button class="ml-6 text-sm w-20 h-10 border shadow-md text-indigo-900 hover:underline">Add City</button> */}
                        </div>
                    </div> 
                </div>              
            </div> 
        </div>
    
    );
};

export default Package;
