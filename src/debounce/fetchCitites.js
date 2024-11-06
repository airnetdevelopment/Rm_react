import { debounce } from "lodash";
import { getCities } from "../api/misc";
import { toast } from "react-toastify";


export const fetchCities = debounce(async (query,type,actions) => {

    const {setDepartureCityOptions,setShowDepartureDropdown,setDestinationCityOptions ,setShowDestinationDropdown} = actions;
    try {
        console.log("Fetching cities for:", query);
        const res = await getCities(query);
        const cities = res?.data?.cities || [];
        if(type==="departure"){
            setDepartureCityOptions(cities); 
            setShowDepartureDropdown(true);  
        }
        else if (type==="destination"){
            setDestinationCityOptions(cities); 
            setShowDestinationDropdown(true);  
        }
        return cities;
    } catch (error) {
        console.error("Error fetching cities:", error);
        toast.error(error);
        return null;
    }
}, 1000);