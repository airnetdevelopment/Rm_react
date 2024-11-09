import { Route, Routes } from "react-router-dom";
import "./App.css";
import BasicDetails from "./Pages/FinalCitySelection/BasicDetails";
import RouteSelection from "./Pages/Routes/RouteSelection";
import Layout from "./layout/Layout";
import Package from "./Pages/Package/Package";
import HotelsCategoryWise from "./Pages/Package/HotelCategoryWise";
import SightseeingCategoryWise from "./Pages/Package/SIghtseeingCategoryWise";
import FlightCategoryWise from "./Pages/Package/FlightCategoryWise";

function App() {
    return (
   
        <Routes>
            {/* <Route element={<Layout/>} > */}
            <Route path='/city' element={ <BasicDetails/> }  />
            <Route path='/route' element={ <RouteSelection/> }  />
            <Route path='/package/:id' element={ <Package/> }  />
            {/* </Route> */}

            {/* testing routes */}
            <Route path='/sightseeing-category' element={ <SightseeingCategoryWise/> }  />
            <Route path='/hotel-category' element={ <HotelsCategoryWise/> }  />
            <Route path='/flight-category' element={ <FlightCategoryWise/> }  />




        </Routes>
    
    );
}

export default App;


// export default App
