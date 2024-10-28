import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import CityComponent from './Pages/City';
// import CityMainComponent from './Pages/City/CityMain';
// import Traveller from './Pages/City/Traveller';
import CitySelectionComponent from './Pages/City/CitySelection';
import TravellerModal from './Pages/City/TravellerModal';
// import CityCard from './Pages/City/CityCard';
import ParentComponent from './Pages/City/Parent';
import DepartureCityCard from './Pages/City/CityCard';
// import DepartureCityCard from './Pages/CityCardsPage.jsx/DepartureCityCard';
import CitySelection from './Pages/CityCardsPage.jsx/CitySelection';
import NightandSightCount from './Pages/CityCardsPage.jsx/NightsandSightModal';
import Counter from './Pages/CityCardsPage.jsx/Counter';
// import CitySelectionComponent from './Pages/City/CitySelection';
import teste from './Pages/DragDrop/teste';
import MianApp from './Pages/DragDrop/Board';
import BasicDetails from './Pages/FinalCitySelection/BasicDetails';
// import CitySelection from './Pages/DragDrop/teste';
import CitySelection1 from './Pages/FinalCitySelection/CitySelection';
import RouteMap from './Pages/Routes/Map';
import Routes from './Pages/Routes/Routes';
import CitySelection2 from './Pages/FinalCitySelection/Fst';
import AppTest1 from './Pages/Routes/AppTest1';
import RouteMap1 from './Pages/Routes/MapTest1';
import GetBookingDetails from './Pages/Booking.jsx/Booking';
import PackagePage from './Pages/Package/Package';
import Commute from './Pages/Package/Commute';
import FlightCategoryWise from './Pages/Package/FlightCategoryWise';
import HotelsCategoryWise from './Pages/Package/HotelCategoryWise';

import FlightCard from './Pages/Package/FlightCard';
import Sightseeing from './Pages/Package/SIghtseeingCategoryWise';
import SightseeingCategoryWise from './Pages/Package/SIghtseeingCategoryWise';
import CityItinerary from './Pages/Package/CityItinerary';
import TableParent from './Pages/Package/TableParent';
import PackageComponent from './Pages/Package/PackageMain';
import { eventsArr } from './Pages/Package/PackageArray';
import TransitCard from './Pages/Package/Transit';
import SecurityCheck from './Pages/Package/SecurityCheck';
import Lounge from './Pages/Package/Lounge';
import TransitCategoryWise from './Pages/Package/TransitCategoryWise';
import SightEvent from './Pages/Package/SightEvent';
import Leisure from './Pages/Package/Leisure';
import FlightTicket from './Pages/Package/FlightCardMain';
import InclusionExclusion from './Pages/Package/InclusionExclusion';
import Sight from './Pages/Package/Sight';


// import PaymentComponent from './Pages/Package/Payment';



function App() {
  return (
    <PrimeReactProvider>
      {/* <tester /> */}
      
      {/* <DepartureCityCard /> */}
      {/* <CityComponent /> */}
      {/* <CityMainComponent /> */}
      {/* <Traveller /> */}
      {/* <CitySelectionComponent /> */}
      {/* <TravellerModal /> */}
      {/* <CityCard /> */}
      {/* <TemplateDemo /> */}
      {/* <ParentComponent /> */}
      {/* <DepartureCityCard /> */}
      {/* <CitySelection /> */}
      {/* <BasicDetails /> */}
      {/* <RouteMap /> */}
      {/* <Routes /> */}




     < PackagePage />
     {/* < SightEvent /> */}
     {/* < Leisure /> */}
     {/* < Lounge /> */}
     {/* <Commute /> */}
     {/* < SecurityCheck /> */}
     {/* <FlightTicket /> */}
     {/* <TransitCard /> */}

     {/* <InclusionExclusion /> */}




      {/* <Transits /> */}
      {/* <CityItinerary /> */}
      {/* <FlightCard /> */}
      {/* <TableParent /> */}
      {/* <Commute /> */}
      {/* <FlightCategoryWise /> */}
      {/* <SecurityCheck /> */}
      {/* <Lounge /> */}
      {/* <HotelsCategoryWise /> */}
      {/* <PackageComponent eventArr={eventsArr} /> */}
      {/* <AppTest1 />  */}
      {/* <RouteMap1 /> */}
      {/* <CitySelection1 /> */}
      {/* <SightseeingCategoryWise /> */}
      {/* <DepartureCityCard /> */}
      {/* <NightandSightCount /> */}
      {/* <MianApp /> */}
      {/* <CitySelectionComponent /> */}
      {/* <CitySelectionComponent /> */}
      {/* <MainCard /> */}
      {/* <TransitCategoryWise /> */}
    {/* <GetBookingDetails /> */}
    {/* <CitySelection2 /> */}

    {/* testing the css for the components */}
    {/* < FlightTicket/> */}
  
    </PrimeReactProvider>
    
  );
}

export default App;


// export default App
