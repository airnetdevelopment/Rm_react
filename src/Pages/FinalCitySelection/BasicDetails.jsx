import { useCallback, useEffect, useRef, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import "primereact/resources/primereact.min.css"; 
import { Formik, Form, Field, ErrorMessage } from "formik";
import TravellerModal from "./TravellerModal1";
import CitySelection2 from "./Fst";
import { useSelector,useDispatch } from "react-redux";
import { purposeOfTravel } from "../../assets/static/purposeOfTravel";
import { travelerType } from "../../assets/static/travelerType";
import { citySelectionValidationSchema } from "../../validations/citySelectionSchema";
import { toast, ToastContainer } from "react-toastify";
import { fetchCities } from "../../debounce/fetchCitites";
import { getNearbyAirports } from "../../api/misc";
import { updateAll } from "../../redux/features/citySelectionSlice";
import { useNavigate } from "react-router-dom";

// Sample mock data for departure cities
const mockDepartureCityDetails = [
    {
        city_id: 1273294,
        locked: true,
        selected_airports:["DEL"],
        stay_days:0,
        type: "departure",
        
    },
    {
        city_id: 3173435,
        locked: false,
        selected_airports:["MXP"],
        stay_days:3,
        type: "destination",
        
    },
    {
        city_id: 3169070,
        locked: false,
        selected_airports:["FCO"],
        stay_days:3,
        type: "destination",
        
    },
    {
        city_id: 1273294,
        locked: true,
        selected_airports:["DEL"],
        stay_days:0,
        type: "departure",
        
    },
    // {
    //     id: 5,
    //     city_name: "5",
    //     city_id: 105,
    //     nearbyAirports: [
    //         { name: "Narita International Airport", iata: "NRT", isSelected: false },
    //         { name: "Haneda Airport", iata: "HND", isSelected: false },
            
    //     ],
    //     recievedInfo: true,
    //     type: "departure",
    //     locked: false,
    //     lockedAt: -1,
    // },
    // {
    //     id: 6,
    //     city_name: "6",
    //     city_id: 106,
    //     nearbyAirports: [
    //         { name: "Charles de Gaulle Airport", iata: "CDG", isSelected: false },
    //         { name: "Orly Airport", iata: "ORY", isSelected: false },
            
    //     ],
    //     recievedInfo: true,
    //     type: "departure",
    //     locked: false,
    //     lockedAt: -1,
    // },
    
];

const BasicDetails = () => {

    const stateValues =  useSelector((state)=>state.citySelection);
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    const [dates, setDates] = useState(null);
    const [selectedPurpose,setSelectedPurpose]=useState(null);
    const [travellers, setTravellers] = useState(""); // This will store the number of travellers
    const [showModal, setShowModal] = useState(false); // Control the visibility of the modal

    const [destinationCityString,setDestinationCityString] = useState("");

    const [departureCityOptions, setDepartureCityOptions] = useState([]); // Stores cities returned from API
    const [showDepartureDropdown, setShowDepartureDropdown] = useState(false); 

    const [destinationCityOptions, setDestinationCityOptions] = useState([]); // Stores cities returned from API
    const [showDestinationDropdown, setShowDestinationDropdown] = useState(false); 

    const [rawRoute, setRawRoute] = useState([]);

    const departureDropdownRef = useRef(null); 
    const destinationDropdownRef = useRef(null); 


    useEffect(() => {

        const handleClickOutside = (event) => {
            if (departureDropdownRef.current && !departureDropdownRef.current.contains(event.target)) {
                setShowDepartureDropdown(false);
            }
            if (destinationDropdownRef.current && !destinationDropdownRef.current.contains(event.target)) {
                setShowDestinationDropdown(false);
            }
        };
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const initialValues = {
        startDate: stateValues.startDate || "",
        endDate: stateValues.endDate || "",
        departureCity:  stateValues.departureCity || "",
        destinationCities:  stateValues.destinationCities || [],
        purposeOfTravel:  stateValues.purposeOfTravel ||"",
        travelerType: stateValues.travelerType ||"",
        travelers: stateValues.travelers || []
    };
    
    const openModal = () => {
        if (!showModal) {
            setShowModal(true);
        }
    };

    const handleDateChange = (e, setFieldValue) => {
        setDates(e.value);
        const [start, end] = e.value || [];
        setFieldValue("startDate", start);
        setFieldValue("endDate", end);
    };

    const handleTravelerInfoSubmission = (info,setFieldValue)=>{
        console.log(info); // Check the info array
        setFieldValue("travelers", info.rooms); // Set the array into Formik's values
    };

    // Debounce fetchCities to avoid making multiple API calls
    const debouncedFetchCities = useCallback((query,type)=> 
        fetchCities(query,type,{setDepartureCityOptions,setShowDepartureDropdown,setDestinationCityOptions ,setShowDestinationDropdown}),[]);

    // Handle input changes
    const handleDepartureCityOnChange = (e,setFieldValue) => {
        const query = e.target.value;
        setFieldValue("departureCity", query);
        if (query.length > 1) {  
            debouncedFetchCities(query,"departure"); ;  
        } else {
            setShowDepartureDropdown(false);
        }
    };

    const handleDestinationCityOnChange = (e) => {
        const query = e.target.value;
        setDestinationCityString(query);
        if (query.length > 1) {  
            debouncedFetchCities(query,"destination");; 
        } else {
            setShowDestinationDropdown(false);
        }
    };   

    const fetchNearbyAirports = useCallback(async(query)=>{ 
        try {
            const res = await getNearbyAirports(query);
            const airports = res?.data?.airports || [];
            return airports;
        } catch (error) {
            console.error("Error fetching airports:", error);
            toast.error(error);
            return null;
        }},[]);

    const handleDestinationCitySelected = async(city,setFieldValue)=>{
      
        const cityId = city.city_id;

        const airports = await fetchNearbyAirports(cityId);
        console.log("airports: ", airports);

        if(airports && airports.length>0){
            setRawRoute((prev)=>[...prev,{city,nearByAirports:airports,selectedAirport:airports[0]}]);
            setFieldValue("destinationCities",rawRoute );    
            setShowDestinationDropdown(false);
            setDestinationCityString("");
        }
    };

   

    const formatDate = (date)=> {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
        const day = String(date.getDate()).padStart(2, "0");
    
        return `${year}-${month}-${day}`;
    };

    const handleGenerateRoutes = (values)=>{
        values.startDate = formatDate(values.startDate);
        values.endDate = formatDate(values.endDate);
        values.route = mockDepartureCityDetails;
        dispatch(updateAll(values));
        navigate("/route");
    };

    useEffect(() => {
        console.log(rawRoute);
    }, [rawRoute]);
    
  
    return (
        <main  >
            <Formik
                initialValues={initialValues}
                validationSchema={citySelectionValidationSchema}
                onSubmit={async (values, { setSubmitting }) => handleGenerateRoutes(values) }
            >
                {({values,setFieldValue,isSubmitting}) => (
                    <Form>
                        <div>
                            {/* form section */}
                            <div className='input-section pt-[-2px] pb-1 h-w-full'>      
                                <div className='flex'>

                                    {/* Date Range */}
                                    <div className="card flex justify-content-center w-80 pl-1 pr-1">
                                        <FloatLabel className='flex border-b-2 border-gray-200'>
                                            <Calendar 
                                                value={dates} 
                                                onChange={(e) => handleDateChange(e, setFieldValue)}
                                                selectionMode="range" 
                                                readOnlyInput
                                                hideOnRangeSelection
                                                showIcon  
                                                className="text-sm p-0" 
                                                panelClassName="text-sm p-0 w-72 h-80 overflow-hidden" />
                                            <label htmlFor="date_range">Date Range</label>
                                        </FloatLabel>
                                        <ErrorMessage name="startDate" component="div" className="error-message" />
                                        <ErrorMessage name="endDate" component="div" className="error-message" />
                                        <style>{`
                                                    .p-datepicker {
                                                        padding: 0 !important; /* Ensure no padding on the calendar */
                                                    }
                                                    .p-datepicker-calendar {
                                                        font-size: 0.65rem !important; /* Target calendar font size */
                                                    }
                                                    .p-datepicker-calendar th, .p-datepicker-calendar td {
                                                        padding: 1px !important; /* Adjust padding for calendar cells */
                                                    }
                                                    .p-datepicker-calendar .p-datepicker-header {
                                                        font-size: 0.7rem !important; /* Adjust header font size */
                                                        padding: 0 !important; /* No padding on the header */
                                                    }
                                             `}</style>
                                    </div>
        
                                    {/* Departure City section */}
                                    <div className="card flex justify-content-center">
                                        <FloatLabel className="flex border-b-2 border-gray-200">
                                            <Field name="departureCity">
                                                {({ field }) => (
                                                    <InputText
                                                        id="departurecity"
                                                        value={values.departureCity}
                                                        onChange={(e) => {
                                                            e.persist();
                                                            handleDepartureCityOnChange(e,setFieldValue); // Call debounced function
                                                        }}
                                                        autoComplete="off"
                                                    />
                                                )}
                                            </Field>
                                            <label htmlFor="departurecity">Departure City</label>
                                        </FloatLabel>
                                        <ErrorMessage name="departureCity" component="div" className="error-message" />

                                        {/* Dropdown to display city options */}
                                        {showDepartureDropdown && departureCityOptions && departureCityOptions.length > 0 && (
                                            <div ref={departureDropdownRef} className="dropdown-list max-h-[15rem] overflow-y-auto p-1  w-[13rem] rounded-lg absolute top-[6.3rem] bg-blue-50 border  mt-1  shadow-lg z-10">
                                                {departureCityOptions.map((city) => (
                                                    <div
                                                        key={city.city_id} // Replace 'city.id' with a unique identifier for each city
                                                        onClick={() => {
                                                            setFieldValue("departureCity", city.city_name);
                                                            setShowDepartureDropdown(false); // Hide dropdown on selection
                                                        }}
                                                        className="py-2 px-4 hover:bg-blue-700 hover:text-white text-blue-800 font-semibold cursor-pointer rounded-lg"
                                                    >
                                                        {city.city_name},{city.country_name}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {/* Traveller section */}
                                    <div className="card flex justify-content-center ">
                                        <FloatLabel className='flex border-b-2 border-gray-200'>
                                            <InputText id="travellers" value={travellers} onChange={(e) => setTravellers(e.target.value)}
                                                onClick={openModal} // Open modal when the input is focused
                                            />
                                            <label htmlFor="travellers">Travellers</label>
                                        </FloatLabel>
                                    </div>

                                    {/* Traveller modal */}
                                    <TravellerModal visible={showModal} onHide={() => setShowModal(false)} travelerInfoSubmission={(info)=> handleTravelerInfoSubmission(info,setFieldValue)} />

                                    {/* purposeOfTravel section */}
                                    <div className="card flex justify-content-center w-80">
                                        <Field>
                                            {({field})=>(
                                                <Dropdown 
                                                    value={values.purposeOfTravel} 
                                                    onChange={(e) => setFieldValue("purposeOfTravel", e.value)}
                                                    options={purposeOfTravel}
                                                    optionLabel="name" 
                                                    placeholder="Purpose Of Travel" 
                                                    className="w-full md:w-14rem border-b-2 border-gray-200 text-base" 
                                                    itemTemplate={(option) => (
                                                        <div className="py-1 px-4 text-black text-xs hover:bg-gray-100">
                                                            {option.name}
                                                        </div>
                                                    )}
                                                    panelTemplate={({ options }) => (
                                                        <div className="bg-gray-800 rounded-lg shadow-lg">
                                                            {options.map((option) => (
                                                                <div 
                                                                    key={option.value} 
                                                                    className="py-1 px-4 text-white text-lg hover:bg-gray-300 "
                                                                    onClick={() => setFieldValue("purposeOfTravel", option.name)}
                                                                >
                                                                    {option.name}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                />
                                            )}
                                        </Field>
                                        <ErrorMessage name="purposeOfTravel" component="div" className="error-message" />
                                    </div>    

                                    {/* Traveller type section */}
                                    <div className="card flex justify-content-center">
                                        <Field>
                                            {({field})=>(
                                                <Dropdown value={values.travelerType}   
                                                    onChange={(e) => setFieldValue("travelerType", e.value)}
                                                    options={travelerType} 
                                                    optionLabel="name" 
                                                    placeholder="Traveller Type" className="w-full md:w-14rem border-b-2 border-gray-200 text-base" 
                                                    itemTemplate={(option) => (
                                                        <div className="py-1 px-4 text-black text-xs hover:bg-gray-100">
                                                            {option.name}
                                                        </div>
                                                    )}
                                                    panelTemplate={({ options }) => (
                                                        <div className="bg-gray-800 rounded-lg shadow-lg">
                                                            {options.map((option) => (
                                                                <div 
                                                                    key={option.value} 
                                                                    className={"py-1 px-4 text-white text-xs hover:bg-gray-300 "}
                                                                    onClick={() => setFieldValue("travelerType", option.name)}
                                                                >
                                                                    {option.name}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                />
                                            )}
                                        </Field>
                                        <ErrorMessage name="purposeOfTravel" component="div" className="error-message" />
                                    </div>    

                                </div>
                            </div>

                            <div>
                                {/* Destination Cities Selection */}
                                <FloatLabel className="flex border-b-2 border-gray-200 mt-4">
                                    <Field name="destinationCities">
                                        {({ field }) => (
                                            <InputText
                                                id="destinationcities"
                                                value={destinationCityString}
                                                onChange={(e) => {
                                                    e.persist();
                                                    handleDestinationCityOnChange(e);
                                                    setShowDestinationDropdown(true);
                                                }}
                                                autoComplete="off"
                                            />
                                        )}
                                    </Field>
                                    <label htmlFor="destinationcities">Destination Cities</label>
                                </FloatLabel>
                                <ErrorMessage name="destinationCities" component="div" className="error-message" />
                                {showDestinationDropdown &&destinationCityOptions &&  destinationCityOptions.length > 0 && (
                                    <div ref={destinationDropdownRef} className="dropdown-list max-h-[15rem] w-[12rem] rounded-lg absolute top-[11.3rem] bg-red-50 border mt-1 shadow-lg z-10">
                                        {destinationCityOptions.map((city) => (
                                            <div
                                                key={city.city_id}
                                                onClick={() => {
                                                    handleDestinationCitySelected(city,setFieldValue);
                                                    
                                                }}
                                                className="py-2 px-4 hover:bg-red-700 hover:text-white text-red-800 font-semibold cursor-pointer rounded-lg"
                                            >
                                                {city.city_name}, {city.country_name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <CitySelection2 />
                          

                            {/* image section */}

                            {/* Conditional rendering of image or component2 */}
                            {/* {inputClicked ? (
                                    <div className="card flex justify-center w-full h-auto mt-4">
                                        <CitySelection2 />
                                    </div>
                                ) : (
                                    <div className="card flex justify-center w-full h-auto mt-4">
                                 
                                        <img src={visionbinimage} alt="Description of the image" className="max-w-full h-auto" />
                                    </div>
                                )} */}

                            {/* </div> */}
                        </div>
                        <button type="submit" disabled={isSubmitting} className="border border-red-400 px-4 py-2 font-bold text-red-800 bg-red-100 rounded-xl" >Submit</button> 

                    </Form>
                )}
            </Formik>

            <ToastContainer
                position="top-right"
            />
        </main>
     
    );
};

export default BasicDetails;