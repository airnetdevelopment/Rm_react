import axios from "axios";


export const getNewPackage = async(routeId)=>{
    try {
        const payload = {
            uniqueKey: routeId,
            // paxCountArr: travelers,
        };
  
        const { data } = await axios.post(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/packageEndpoints/getNewPackageEvents`,
            payload,
        );
  
        if (data) {
            console.log("Recieved package from backend", data);
  
            return data;
        }
        return null;
    } catch (err) {
        throw new Error(err);
    }
};