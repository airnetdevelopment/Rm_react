import React from "react";
import 'primereact/resources/primereact.min.css'; 
import { Card } from "primereact/card";
import { Badge } from "primereact/badge";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import RouteMap from "./Map";
import aeroplane from '../../assets/aeroplane.png';
import railway from '../../assets/railway.png';
import { ScrollPanel } from 'primereact/scrollpanel';
import 'primereact/resources/themes/saga-blue/theme.css';  // PrimeReact theme


const Routes = () => {

    const cardData = [
        {
          title: 'Delhi',
          description: 'The capital of India',
          badgeContent: 'Cheapest',

        },
        {
          title: 'Rome',
          description: 'The capital of Italy',
          badgeContent: 'Fastest',
        },
        {
          title: 'Venice',
          description: 'Famous for its canals',
          badgeContent: 'Cheapest'
        },
        {
          title: 'Milan',
          description: 'Known for fashion and design',
          badgeContent: 'Cheapest',
        },
      ];

      const tripData = [
        {
          from: 'Delhi',
          to: 'Venice',
          transferIcon: 'plane', // Use an icon identifier like 'plane', 'train', etc.
          estimatedCost: 500, // Cost in the desired currency
          incentive: 50, // Incentive or discount
          duration: '7h 45m', // Flight or travel time
        },
        {
          from: 'Venice',
          to: 'Rome',
          transferIcon: 'train',
          estimatedCost: 150,
          incentive: 10,
          duration: '3h 30m',
        },
        {
          from: 'Rome',
          to: 'Milan',
          transferIcon: 'bus',
          estimatedCost: 100,
          incentive: 5,
          duration: '6h 15m',
        },
        {
          from: 'Milan',
          to: 'Delhi',
          transferIcon: 'plane',
          estimatedCost: 600,
          incentive: 70,
          duration: '8h 50m',
        }
      ];
      

      const cities = [
        { id: 1, name: 'Delhi', description: 'Departure' },
        { id: 2, name: 'Rome', description: '2 Nights' },
        { id: 3, name: 'Venice', description: '3 Nights' },
        { id: 4, name: 'Milan', description: '3 Nights' },
        { id: 5, name: 'Delhi', description: 'Arrival' },
      ];

      const [sortOption, setSortOption] = useState(null);
    //   const [sortMode, setMode] = useState(null);
      
      const sortOptions = [
        { label: 'Ascending Cost', value: 'ascendingcost' },
        { label: 'Descending Cost', value: 'descendingcost' },
        { label: 'Ascending Incentive', value: 'ascendingincentive' },
        { label: 'Descending Incentive', value: 'descendingcost' },
        { label: 'Ascending Duration', value: 'asscendingduration' },
        { label: 'Descending Duration', value: 'descendingduration' },

      ];

      const sortMode = [
        { label: 'Flights only', value: 'flights' },
        { label: 'Flights and Transits', value: 'flightstransits' },
        { label: 'All', value: 'all' }
      ];

       // Sorting function
     const onSortChange = (e) => {
     const sortField = e.value;
    //  const sortedData = [...data].sort((a, b) => {
    //   if (a[sortField] < b[sortField]) return -1;
    //   if (a[sortField] > b[sortField]) return 1;
    //   return 0;
    //  });
    //  setSortOption(sortField);
    //  setData(sortedData);
      };
 

  return (
  <div>
      {/* head section */}
      <div className='head-section pt-1 pb-1 h-12 w-full bg-gray-100 font-bold mt-[-25px]'>
        <h1 className='text-xl font-bold' >RouteMaestro</h1>
      </div>

       {/*Section1 */}
       <div className='flex flex-wrap gap-4 p-1'>
  <div className='flex items-center gap-2 h-12 flex-grow bg-white font-bold'>
    <h2 className='text-sm font-bold text-indigo-900'>Date Range:</h2>
    <p className='text-sm font-bold text-red-500 underline'>11-10-2024 - 15-10-2024</p>
  </div>

  <div className='flex items-center gap-2 h-12 flex-grow bg-white font-bold'>
    <h2 className='text-sm font-bold text-indigo-900'>Departure City:</h2>
    <p className='text-sm font-bold text-red-500 underline'>Delhi</p>
  </div>

  <div className='flex items-center gap-2 h-12 flex-grow bg-white font-bold'>
    <h2 className='text-sm font-bold text-indigo-900'>Travellers:</h2>
    <p className='text-sm font-bold text-red-500 underline'>4 Adults, 2 Children</p>
  </div>

  <div className='flex items-center gap-2 h-12 flex-grow bg-white font-bold'>
    <h2 className='text-sm font-bold text-indigo-900'>Purpose Of Travel:</h2>
    <p className='text-sm font-bold text-red-500 underline'>Leisure</p>
  </div>

  <div className='flex items-center gap-2 h-12 flex-grow bg-white font-bold'>
    <h2 className='text-sm font-bold text-indigo-900'>Traveller Type:</h2>
    <p className='text-sm font-bold text-red-500 underline'>Family</p>
  </div>
</div>

      <hr/>

        {/* Section2 */}
     <div className='flex flex-row space-x-4 mt-4 h-16'>
      <div className='flex flex-col pt-3 pb-3 h-12 w-full bg-white font-bold mt-[-10px] justify-center items-center'>
        <h2 className='text-lg font-bold space-x-2 text-red-500 text-center mt-2' >Choose Your Clients Route Of Travel</h2> 
        <div className="flex flex-row space-x-2 h-10 text-black pt-2">
        <Dropdown 
        value={sortOption} 
        options={sortOptions} 
        onChange={onSortChange} 
        placeholder="Sort By" 
        style={{ color: 'indigo' }}
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
          <Card style={{ padding: '10px', height: '50px' }} >
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
        <div className="flex-auto">
                    <ScrollPanel style={{ width: '100%', height: '400px', border: '1px solid black' }} className="p-0">

                          {/* Card container */}
      <div className="p-col-12 p-md-10 p-lg-7">
        {/* <h2 className="p-text-center">Travel Destinations</h2> */}
        {cardData.map((card, index) => (
          <div className="p-mb-2" key={index}> {/* Margin bottom for spacing */}
            <Card className="relative h-24 mb-3 p-1 rounded-lg border-2 border-gray-200 shadow-md" >
              {/* <Badge value={card.badgeContent} severity="success" style={{ position: 'absolute', top: '0px', right: '10px',backgroundColor:'green' }} className="absolute top-1 left-1 w-24" /> */}
              <Badge value={card.badgeContent} severity={card.badgeContent === 'Fastest' ? 'danger' : 'success'}  // 'danger' for red, 'success' for green
                style={{ position: 'absolute', top: '0px',right: '10px', backgroundColor: card.badgeContent === 'Fastest' ? 'red' : 'green'  // Red for 'Fastest', Green for 'Cheapest'
                }} 
                className="absolute top-1 left-1 w-24" />

              {/* <p className="mt-[-15px] mb-6">{card.description}</p> */}
              <div className="flex flex-row justify-around items-center p-2 mt-[-12px] mb-4">
              {/* Field 1 */}
             <div className="flex flex-row text-center">
              <span className="text-indigo-900 font-semibold">Delhi </span>
              <span className="text-indigo-900">
              <img src={aeroplane} alt="duration icon" className="inline-block w-4 h-4" /> {/* Replace with actual image path */}
              </span>
             </div>
    
             {/* Field 2 */}
            <div className="flex flex-row text-center">
            <span className="text-indigo-900 font-semibold">Venice </span>
            <span className="text-gray-900">
            <img src={aeroplane} alt="duration icon" className="inline-block w-4 h-4" /> {/* Replace with actual image path */}
            </span>
            </div>

            <div className="flex flex-row text-center">
            <span className="text-indigo-900 font-semibold">Rome </span>
            <span className="text-gray-900">
            <img src={railway} alt="duration icon" className="inline-block w-4 h-4" /> {/* Replace with actual image path */}
            </span>
            </div>

            <div className="flex flex-row text-center">
            <span className="text-indigo-900 font-semibold">Milan </span>
            <span className="text-gray-900">
            <img src={railway} alt="duration icon" className="inline-block w-4 h-4" /> {/* Replace with actual image path */}
            </span>
            </div>
                
              </div>

              <div className="flex flex-row bg-gray-100 justify-around items-center p-2 mt-[-15px] h-6">
              {/* Field 1 */}
             <div className="flex flex-row text-center">
              <span className="text-gray-700 font-semibold">Estd. Cost: </span>
              <span className="text-gray-900"> 1000</span>
             </div>
    
             {/* Field 2 */}
            <div className="flex flex-row text-center">
            <span className="text-gray-700 font-semibold">Incentive: </span>
            <span className="text-gray-900"> 100</span>
            </div>

            <div className="flex flex-row text-center">
            <span className="text-gray-700 font-semibold">Duration: </span>
            <span className="text-gray-900"> 2Hr</span>
            </div>
                
              </div>
            </Card>
          </div>
        ))}
      </div>
                    </ScrollPanel>
                </div>
    
    </div>
        </div>

        {/* column for map */}
        <div className="w-7/12 bg-green-100 border-black border h-full">
        <RouteMap />
        </div>



        {/* <h2 className='text-sm font-bold space-x-2 text-red-500' >Choose Your Clients Route Of Travel</h2>  */}
      </div>
  </div>
  );
};

export default Routes;
