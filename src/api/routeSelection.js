import axios from "axios";


export const getAllPossibleRoutes = async(travellingDetails)=>{
    try{
        const {data}=await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/misc/routes`,travellingDetails );
        return data;
    }
    catch(err){
        throw new Error(err) ;
    }
};