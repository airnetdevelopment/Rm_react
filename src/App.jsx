import { Route, Routes } from "react-router-dom";
import "./App.css";
import BasicDetails from "./Pages/FinalCitySelection/BasicDetails";
import RouteSelection from "./Pages/Routes/RouteSelection";
import Layout from "./layout/Layout";
import Package from "./Pages/Package/Package";

function App() {
    return (
   
        <Routes>
            {/* <Route element={<Layout/>} > */}
            <Route path='/city' element={ <BasicDetails/> }  />
            <Route path='/route' element={ <RouteSelection/> }  />
            <Route path='/package/:id' element={ <Package/> }  />
            {/* </Route> */}
        </Routes>
    
    );
}

export default App;


// export default App
