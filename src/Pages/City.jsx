import React from 'react';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from 'primereact/floatlabel';
import visionbinimage from '../assets/visionbinimage.png';
import 'primereact/resources/primereact.min.css'; 


const CityComponent = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedPurpose,setSelectedPurpose]=useState(null);
    const [selectedTraveller,setSelectedTraveller]=useState(null);
    const [arrivaldate, setArrivalDate] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [departuredate, setDepartureDate] = useState(null);
    const [destinationCity, setDestinationCity] = useState(''); // State for Destination City
    const [departureCity, setDepartureCity] = useState(''); // State for Arrival City
    const [filterValue, setFilterValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);

    // const [isDarkMode, setIsDarkMode] = useState(false);

    // const toggleTheme = () => {
    //     const themeLink = document.getElementById('theme-link');
    //     themeLink.href = isDarkMode 
    //       ? 'primereact/resources/themes/lara-light-indigo/theme.css' 
    //       : 'primereact/resources/themes/lara-dark-indigo/theme.css';
        
    //     setIsDarkMode(!isDarkMode);
    //   };

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
        { name: 'Australia', code: 'AUS' },
        { name: 'South Africa', code: 'SA' },
        { name: 'South America', code: 'SAM' },
        { name: 'Switzerland', code: 'SWISS' },
        { name: 'India', code: 'IND' }
    ];
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

  return (
    <div>
        {/* head section */}
      <div className='head-section pt-3 pb-3 h-16 w-full bg-orange-100 font-bold'>
        <h1 >RouteMaestro</h1>
      </div>

        {/* input section */}
      <div className='input-section pt-5 pb-5 h-w-full'>      
      <div className='flex'>
        
        <div className="card flex justify-content-center">
           <FloatLabel className='flex border-b-2 border-gray-200'>
           <Calendar inputId="departure_date" value={departuredate} onChange={(e) => setDepartureDate(e.value)} showIcon />
        <label htmlFor="departure_date">Departure Date</label>
        </FloatLabel>
        </div>
        
        <div className="card flex justify-content-center">
        <FloatLabel className='flex border-b-2 border-gray-200'>
           <Calendar inputId="arrival_date" value={arrivaldate} onChange={(e) => setArrivalDate(e.value)} showIcon />
           <label htmlFor="arrival_date">Arrival Date</label>
        </FloatLabel>
        </div>
        
        <div className="card flex justify-content-center ">
           <FloatLabel className='flex border-b-2 border-gray-200'>
            <InputText id="departurecity" value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} />
            <label htmlFor="departurecity">Departure City</label>
           </FloatLabel>
        </div>

        <div className="card flex justify-content-center">
           <Dropdown value={selectedPurpose} onChange={(e) => setSelectedPurpose(e.value)} options={purposeTravel} optionLabel="name" 
                editable placeholder="Purpose Of Travel" className="w-full md:w-14rem border-b-2 border-gray-200 rounded-lg text-base" 
                  itemTemplate={(option) => (
                    <div className="py-2 px-4 text-black text-sm hover:bg-gray-100">
                        {option.name}
                    </div>
                )}
                panelTemplate={({ options }) => (
                    <div className="bg-gray-800 rounded-lg shadow-lg">
                        {options.map((option) => (
                            <div 
                                key={option.code} 
                                className={`py-2 px-4 text-white text-lg hover:bg-gray-300 ${selectedPurpose && selectedPurpose.code === option.code ? 'bg-green-500 text-white' : ''}`}
                                onClick={() => setSelectedPurpose(option)}
                            >
                                {option.name}
                            </div>
                        ))}
                    </div>
                )}
                 />
        </div>    

        <div className="card flex justify-content-center">
           <Dropdown value={selectedTraveller} onChange={(e) => setSelectedTraveller(e.value)} options={travellerType} optionLabel="name" 
                editable placeholder="Select Traveller Type" className="w-full md:w-14rem border-b-2 border-gray-200 rounded-lg text-base" 
                  itemTemplate={(option) => (
                    <div className="py-2 px-4 text-black text-sm hover:bg-gray-100">
                        {option.name}
                    </div>
                )}
                panelTemplate={({ options }) => (
                    <div className="bg-gray-800 rounded-lg shadow-lg">
                        {options.map((option) => (
                            <div 
                                key={option.code} 
                                className={`py-2 px-4 text-white text-lg hover:bg-gray-300 ${selectedPurpose && selectedPurpose.code === option.code ? 'bg-green-500 text-white' : ''}`}
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
        <div className='flex flex-col items-center pt-5 pb-5 w-full h-auto'>
        <div className="card flex justify-center">
         <FloatLabel className='flex border-2 border-gray-200 h-12 rounded-lg'>
          <InputText
           id="destinationcity"
           value={destinationCity}
           onChange={(e) => setDestinationCity(e.target.value)}
           className='border-b-2 border-gray-200'
           />
         <label htmlFor="destinationcity">Destination City</label>
         </FloatLabel>
        </div>

  <div className="card flex justify-center w-full h-auto mt-4">
    <img src={visionbinimage} alt="Description of the image" className="max-w-full h-auto" />
  </div>
</div>

{/* <div className="card flex justify-content-center w-36 h-24"> */}
<div className="flex justify-content-center w-44 p-1 h-12 items-center border-2 border-gray-200 rounded-lg">
            <Dropdown
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.value)}
                options={filteredOptions.length > 0 ? filteredOptions : countries}
                optionLabel="name"
                placeholder="Destination City"
                className="w-full md:w-14rem"
                filter={false} // Disable PrimeReact's built-in filter
                showClear
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
        </div>
  
        {/* </div>    */}

        <div className="card flex justify-content-center">
    <FloatLabel className="flex border-b-2 border-gray-200 focus-within:border-blue-500">
        <Calendar
            inputId="departure_date"
            value={departuredate}
            onChange={(e) => setDepartureDate(e.value)}
            showIcon
            className="w-full border-none focus:ring-0 focus:outline-none px-2"
        />
        <label htmlFor="departure_date" className="text-gray-500">
            Departure Date
        </label>
    </FloatLabel>
</div>

<div className="card flex justify-center items-center">
    <FloatLabel className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-600 w-full">
        <Calendar
            inputId="departure_date"
            value={departuredate}
            onChange={(e) => setDepartureDate(e.value)}
            showIcon
            className="w-full text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0 px-3 py-2"
            style={{ borderRadius: '0', boxShadow: 'none' }}
        />
        <label htmlFor="departure_date" className="text-gray-500 transition-all duration-200 ease-in-out">
            Departure Date
        </label>
    </FloatLabel>
</div>


    </div>
  );
};

export default CityComponent;