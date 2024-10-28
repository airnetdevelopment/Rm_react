import React from 'react';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from 'primereact/floatlabel';
import visionbinimage from '../../assets/visionbinimage.png';
import 'primereact/resources/primereact.min.css'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TravellerModal from './TravellerModal1';
import { Card } from 'primereact/card';
import CitySelection1 from './CitySelection';
import { useEffect } from 'react';



const BasicDetails = () => {

    const [dates, setDates] = useState(null);
    // const [departureCity, setDepartureCity] = useState('');
    const [selectedCityDetails, setSelectedCityDetails] = useState(null);
    // const [departureCity, setDepartureCity] = useState('');
    const [selecteddepartureCity,setSelectedDepartureCity]=useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedPurpose,setSelectedPurpose]=useState(null);
    const [selectedTraveller,setSelectedTraveller]=useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [destinationCity, setDestinationCity] = useState(''); 
    const [departureCity, setDepartureCity] = useState(''); 
    const [filterValue, setFilterValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [travellers, setTravellers] = useState(""); // This will store the number of travellers
    const [showModal, setShowModal] = useState(false); // Control the visibility of the modal
    const [inputClicked, setInputClicked] = useState(false);

    const purposeTravel=[
        {name:'Birthday' , code:''},
        {name:'Anniversary' , code:''},
        {name:'Leisure' , code:''},
        {name:'Honeymoon' , code:''},
        {name:'Business' , code:''},
    ];
    const travellerType=[
        {name:'Family' , code:''},
        {name:'Solo' , code:''},
        {name:'Couple' , code:''},
        {name:'Friends' , code:''},
        {name:'Colleagues' , code:''},
    ]

    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const mockDepartureCityDetails = [
        {
            id: 1,
            city_name: 'New York',
            city_id: 101,
            nearbyAirports: [
                { name: 'John F. Kennedy International Airport', iata: 'JFK', isSelected: false },
                { name: 'LaGuardia Airport', iata: 'LGA', isSelected: false },
                
            ],
            recievedInfo: true,
            type: 'departure',
            locked: false,
            lockedAt: -1,
        },
        {
            id: 2,
            city_name: 'Los Angeles',
            city_id: 102,
            nearbyAirports: [
                { name: 'Los Angeles International Airport', iata: 'LAX', isSelected: false },
                { name: 'Hollywood Burbank Airport', iata: 'BUR', isSelected: false },
                
            ],
            recievedInfo: true,
            type: 'departure',
            locked: false,
            lockedAt: -1,
        },
        {
            id: 3,
            city_name: 'Chicago',
            city_id: 103,
            nearbyAirports: [
                { name: 'O’Hare International Airport', iata: 'ORD', isSelected: false },
                { name: 'Midway International Airport', iata: 'MDW', isSelected: false },
                
            ],
            recievedInfo: true,
            type: 'departure',
            locked: false,
            lockedAt: -1,
        },
        {
            id: 4,
            city_name: 'London',
            city_id: 104,
            nearbyAirports: [
                { name: 'Heathrow Airport', iata: 'LHR', isSelected: false },
                { name: 'Gatwick Airport', iata: 'LGW', isSelected: false },
                
            ],
            recievedInfo: true,
            type: 'departure',
            locked: false,
            lockedAt: -1,
        },
        {
            id: 5,
            city_name: 'Tokyo',
            city_id: 105,
            nearbyAirports: [
                { name: 'Narita International Airport', iata: 'NRT', isSelected: false },
                { name: 'Haneda Airport', iata: 'HND', isSelected: false },
                
            ],
            recievedInfo: true,
            type: 'departure',
            locked: false,
            lockedAt: -1,
        },
        // {
        //     id: 6,
        //     city_name: 'Paris',
        //     city_id: 106,
        //     nearbyAirports: [
        //         { name: 'Charles de Gaulle Airport', iata: 'CDG', isSelected: false },
        //         { name: 'Orly Airport', iata: 'ORY', isSelected: false },
                
        //     ],
        //     recievedInfo: true,
        //     type: 'departure',
        //     locked: false,
        //     lockedAt: -1,
        // },
        // {
        //     id: 7,
        //     city_name: 'Berlin',
        //     city_id: 107,
        //     nearbyAirports: [
        //         { name: 'Berlin Brandenburg Airport', iata: 'BER', isSelected: false },
        //         { name: 'Schönefeld Airport', iata: 'SXF', isSelected: false },
                
        //     ],
        //     recievedInfo: true,
        //     type: 'departure',
        //     locked: false,
        //     lockedAt: -1,
        // },
        // {
        //     id: 8,
        //     city_name: 'Sydney',
        //     city_id: 108,
        //     nearbyAirports: [
        //         { name: 'Sydney Kingsford Smith Airport', iata: 'SYD', isSelected: false },
        //         { name: 'Bankstown Airport', iata: 'BWU', isSelected: false },
                
        //     ],
        //     recievedInfo: true,
        //     type: 'departure',
        //     locked: false,
        //     lockedAt: -1,
        // },
        // {
        //     id: 9,
        //     city_name: 'Dubai',
        //     city_id: 109,
        //     nearbyAirports: [
        //         { name: 'Dubai International Airport', iata: 'DXB', isSelected: false },
        //         { name: 'Al Maktoum International Airport', iata: 'DWC', isSelected: false },
                
        //     ],
        //     recievedInfo: true,
        //     type: 'departure',
        //     locked: false,
        //     lockedAt: -1,
        // },
        // {
        //     id: 10,
        //     city_name: 'Singapore',
        //     city_id: 110,
        //     nearbyAirports: [
        //         { name: 'Changi Airport', iata: 'SIN', isSelected: false },
        //         { name: 'Seletar Airport', iata: 'XSP', isSelected: false }
        //     ],
        //     recievedInfo: true,
        //     type: 'departure',
        //     locked: false,
        //     lockedAt: -1,
        // },
    ];

    const filteredCityDetails = mockDepartureCityDetails.filter(
        (city) => city.city_name.toLowerCase().includes(departureCity.toLowerCase())
    );
    

    const validationSchema = Yup.object({
        departureCity: Yup.string().required('Required'),
        travellers: Yup.number().required('Required').min(1, 'At least 1 traveller'),
      });

    
       // Function to open the modal
    const openModal = () => {
           // Open the modal only if it's not already visible
           if (!showModal) {
            setShowModal(true);
        }
    };

       // Function to close the modal
       const closeModal = () => {
        setShowModal(false);
    };


       // Handle user typing and filter the countries array
       const handleFilterChange = (e) => {
        const value = e.target.value.toLowerCase();
        setFilterValue(value);

        // Filter the countries based on user input
        const filtered = countries.filter(country =>
            country.name.toLowerCase().includes(value)
        );

        setFilteredOptions(filtered);
    };

    // dropdown functionality
    const handleInputClick = () => {
        setInputClicked(true);
      };

      const handleModalConfirm = (totalAdults, totalChildren) => {
        setTravellers(`${totalAdults} Adults, ${totalChildren} Children`);  // Update travellers field
        setShowModal(false);
    };

    


  return (
    <Formik
    initialValues={{
      departureCity: '',
      travellers: '',
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log('Form Data:', values);
    }}
  >
     {({ setFieldValue }) => (
        <Form>
    <div>
        {/* head section */}
      <div className='head-section pt-1 pb-1 h-12 w-full bg-red-200 font-bold mt-[-25px]'>
        <h1 className='text-xl font-bold' >RouteMaestro</h1>
      </div>

        {/* form section */}
       <div className='input-section pt-[-2px] pb-1 h-w-full'>      
      <div className='flex'>

        {/* Date Range */}
      <div className="card flex justify-content-center w-80 pl-1 pr-1">
        <FloatLabel className='flex border-b-2 border-gray-200'>
            <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection showIcon  className="text-sm p-0" panelClassName="text-sm p-0 w-72 h-80 overflow-hidden" />
            <label htmlFor="date_range">Date Range</label>
        </FloatLabel>

        <style jsx>{`
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
        <div className="card flex justify-content-center ">
           <FloatLabel className='flex border-b-2 border-gray-200'>
            <InputText id="departurecity" value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} />
            <label htmlFor="departurecity">Departure City</label>
           </FloatLabel>
        </div>

        {/* Traveller section */}
        <div className="card flex justify-content-center ">
           <FloatLabel className='flex border-b-2 border-gray-200'>
            <InputText id="travellers" value={travellers} onChange={(e) => setTravellers(e.target.value)}
            //  onChange={(e) => setTravellers(e.target.value)}
             onClick={openModal} // Open modal when the input is focused
            //  onChange={(e) => setTravellers(e.target.value)} 
             />
            <label htmlFor="travellers">Travellers</label>
           </FloatLabel>
        </div>

         {/* Traveller modal */}
         <TravellerModal visible={showModal} onHide={() => setShowModal(false)}/>

         {/* <TravellerModal visible={showModal} onHide={() => setShowModal(false)} onConfirm={handleModalConfirm} /> */}

        {/* Purpose section */}
        <div className="card flex justify-content-center w-80">
           <Dropdown value={selectedPurpose} onChange={(e) => setSelectedPurpose(e.value)} options={purposeTravel} optionLabel="name" 
                editable placeholder="Purpose Of Travel" className="w-full md:w-14rem border-b-2 border-gray-200 text-base" 
                  itemTemplate={(option) => (
                    <div className="py-1 px-4 text-black text-xs hover:bg-gray-100">
                        {option.name}
                    </div>
                )}
                panelTemplate={({ options }) => (
                    <div className="bg-gray-800 rounded-lg shadow-lg">
                        {options.map((option) => (
                            <div 
                                key={option.code} 
                                className={`py-1 px-4 text-white text-lg hover:bg-gray-300 ${selectedPurpose && selectedPurpose.code === option.code ? 'bg-green-500 text-white' : ''}`}
                                onClick={() => setSelectedPurpose(option)}
                            >
                                {option.name}
                            </div>
                        ))}
                    </div>
                )}
                 />
        </div>    

         {/* Traveller type section */}
        <div className="card flex justify-content-center">
           <Dropdown value={selectedTraveller} onChange={(e) => setSelectedTraveller(e.value)} options={travellerType} optionLabel="name" 
                editable placeholder="Traveller Type" className="w-full md:w-14rem border-b-2 border-gray-200 text-base" 
                  itemTemplate={(option) => (
                    <div className="py-1 px-4 text-black text-xs hover:bg-gray-100">
                        {option.name}
                    </div>
                )}
                panelTemplate={({ options }) => (
                    <div className="bg-gray-800 rounded-lg shadow-lg">
                        {options.map((option) => (
                            <div 
                                key={option.code} 
                                className={`py-1 px-4 text-white text-xs hover:bg-gray-300 ${selectedPurpose && selectedPurpose.code === option.code ? 'bg-green-500 text-white' : ''}`}
                                onClick={() => setSelectedTraveller(option)}
                            >
                                {option.name}
                            </div>
                        ))}
                    </div>
                )}
                 />
         </div>     
        </div>
       </div>

       {/* form section 2 for cities selection */}
        <div className='flex flex-col items-center pt-2 mt-[-40px] pb-2 w-full h-auto'>
        <div className="card flex justify-center">
         <FloatLabel className='flex border-2 border-gray-200 h-12 rounded-lg'>
          
            <Dropdown
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.value)}
                options={filteredOptions.length > 0 ? filteredOptions : countries}
                optionLabel="name"
                placeholder="Destination City"
                className="w-48 md:w-14rem"
                filter={false} 
                onClick={handleInputClick} // Trigger onClick
                itemTemplate={(option) => (
                    <div className="p-dropdown-item">
                        {option.name}
                    </div>
                )}
                panelClassName="custom-dropdown-panel"
                panelHeaderTemplate={() => (
                    <div className="p-input-icon-left p-dropdown-header">
                        <i className="pi pi-search" />
                        <input
                            type="text"
                            value={filterValue}
                            onChange={onFilterChange}
                            className="p-inputtext p-component"
                            placeholder="Type to filter..."
                        />
                    </div>
                )}
            />
         <label htmlFor="destinationcity">Destination City</label>
         </FloatLabel>
        </div>

  {/* image section */}

     {/* Conditional rendering of image or component2 */}
     {inputClicked ? (
        <div className="card flex justify-center w-full h-auto mt-4">
          {/* Render Component2 when input is clicked */}
          <CitySelection1 />
        </div>
      ) : (
        <div className="card flex justify-center w-full h-auto mt-4">
          {/* Render image when input is not clicked */}
          <img src={visionbinimage} alt="Description of the image" className="max-w-full h-auto" />
        </div>
      )}

  {/* <div className="card flex justify-center w-full h-auto mt-4">
    <img src={visionbinimage} alt="Description of the image" className="max-w-full h-auto" />
  </div> */}

        </div>
        </div>
        {/* Submit Button */}
        {/* <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
          </div> */}
        </Form>
      )}
    </Formik>
  );
};

export default BasicDetails;