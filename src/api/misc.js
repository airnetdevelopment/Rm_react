import axios from "axios";


export const getAirports = async(airport)=> {
    try {
        const data = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/search/airport`, { params: { query: airport } });
        return data;
    } catch (error) {
        throw new Error (error?.message || error?.code  || "no airports found");
    }
};

export const getCities = async(city) => {
    try {
        const data = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/search/city`, { params: { query: city } });
        return data;
    } catch (error) {
        throw new Error (error?.message || error?.code  || "no cities found");
    }
};

export const getCountries = async(country)=> {
    try {
        const data = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/search/country`, { params: { query: country } });
        return data;
    } catch (error) {
        throw new Error (error?.message || error?.code  || "no countries found");
    }
};

export const getNearbyAirports = async(cityId)=>{
    try {
        const data=await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/misc/nearby_airports`,{params: { city_id: cityId, nearby: true, limit: 2 }});
        return data;
    } catch (error) {
        throw new Error (error?.message || error?.code  || "no nearby airports found");
    }
};