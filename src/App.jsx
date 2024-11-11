import { Route, Routes } from "react-router-dom";
import "./App.css";
import BasicDetails from "./Pages/FinalCitySelection/BasicDetails";
import RouteSelection from "./Pages/Routes/RouteSelection";
import Layout from "./layout/Layout";
import Package from "./Pages/Package/Package";
import HotelsCategoryWise from "./Pages/Package/HotelCategoryWise";
import SightseeingCategoryWise from "./Pages/Package/SightseeingCategoryWise";
import FlightCategoryWise from "./Pages/Package/FlightCategoryWise";
import HotelAlternatives from "./Pages/Package/HotelAlternatives";
import FlightAlternatives from "./Pages/Package/FlightAlternatives";
import FlightDetails from "./Pages/Package/test";
import TemplateForm from "./dummy/AdTemplates";

function App() {
    return (
   
        <Routes>
            {/* <Route element={<Layout/>} > */}
            <Route path='/city' element={ <BasicDetails/> }  />
            <Route path='/route' element={ <RouteSelection/> }  />
            <Route path='/persona' element={ <TemplateForm /> }  />
            <Route path='/package/:id' element={ <Package/> }  />
            
            {/* </Route> */}

            {/* testing routes */}
            <Route path='/sightseeing-category' element={ <SightseeingCategoryWise/> }  />
            <Route path='/hotel-category' element={ <HotelsCategoryWise/> }  />
            <Route path='/flight-category' element={ <FlightCategoryWise/> }  />
            <Route path='/hotel-alternative' element={ <HotelAlternatives/> }  />
            <Route path='/flight-alternative' element={ <FlightAlternatives/> }  />
            <Route path='/flight-tooltip' element={ <FlightDetails/> }  />



        </Routes>
    
    );
}

export default App;


// export default App
