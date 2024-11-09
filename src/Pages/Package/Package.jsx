import React, { useState, useEffect,useRef } from "react";
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


const tabs = [
    { id: "trips", label: "Trips" },
    { id: "inclusions", label: "Inclusions" },
    { id: "flights", label: "Flights" },
    { id: "hotels", label: "Hotels" },
    { id: "sights", label: "Sights" },
    { id: "transits", label: "Transits" },
];

const Package = () => {

    const routeSelection =  useSelector(state=>state.routeSelection);
    const packageCreation = useSelector(state=>state.packageCreation);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loadingFullPage, setLoadingFullPage] = useState(false);
    const [error, setError] = useState(false);
    const [finalPackage, setFinalPackage] = useState(null);

    const [activeTab, setActiveTab] = useState("trips");
    

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


    const sections = {
        trips: useRef(null),
        inclusions: useRef(null),
        flights: useRef(null),
        hotels: useRef(null),
        sights: useRef(null),
        transits: useRef(null),
    };
    
    const scrollToSection = (section) => {
        setActiveTab(section);
        sections[section].current.scrollIntoView({ behavior: "smooth" });
    };
    
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

        <div className='w-full'>
            <div className='flex w-full '>

                {/* left section */}
                <div className='w-[70%]'>
                    <div className="w-full flex flex-col items-start gap-6 " > 
                        <h1 className='text-indigo-900 font-bold text-2xl underline text-left'>10 nights to Cape Town, Mossel Bay, Milan </h1>
                        <div className="w-full flex flex-col gap-10 ">
                            {/* Tabs */}
                            <div className="flex overflow-auto border-b border-gray-300 mb-4">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => scrollToSection(tab.id)}
                                        className={`py-2 px-4 text-sm font-medium focus:outline-none ${
                                            activeTab === tab.id ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Sections */}
                            <div className="" >
                                <section ref={sections.trips} className="mb-8">
                                    <div> <TabularPackage/> </div>
                                </section>

                                <section ref={sections.inclusions} className="mb-8">
                                    <div> <InclusionExclusion/> </div>

                                </section>

                                <section ref={sections.flights} className="mb-8">
                                    <div> <FlightCategoryWise/> </div>

                                </section>

                                <section ref={sections.hotels} className="mb-8">
                                    <div> <HotelsCategoryWise/> </div>

                                </section>

                                <section ref={sections.sights} className="mb-8">
                                    <div> <SightseeingCategoryWise/> </div>

                                </section>

                                <section ref={sections.transits} className="mb-8">
                                    <div> <TransitCategoryWise/> </div>

                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right section */}
                <div className='w-[30%] flex flex-col items-center'>

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
