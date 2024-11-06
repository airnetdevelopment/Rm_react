import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    startDate:"",
    endDate:"",
    departureCity:"",
    travelers:[],
    purposeOfTravel:"",
    travelerType:"",
    destinationCities:[],
    route:[],
};

const citySelectionSlice = createSlice({
    name: "citySelection",
    initialState,
    reducers: {
        startDate: (state, action) => {
            state.startDate = action.payload;
        },
        endDate: (state, action) => {
            state.endDate = action.payload;
        },
        departureCity: (state, action) => {
            state.departureCity = action.payload;
        },
        travelers: (state, action) => {
            state.travelers = action.payload;
        },
        purposeOfTravel: (state, action) => {
            state.purposeOfTravel = action.payload;
        },
        travelerType: (state, action) => {
            state.travelerType = action.payload;
        },
        destinationCities: (state, action) => {
            state.destinationCities = action.payload;
        },
        route: (state, action) => {
            state.route = action.payload;
        },
        updateAll: (state, action) => {
            return { ...state, ...action.payload };
        }
    },
});

export const { 
    startDate, 
    endDate, 
    departureCity, 
    travelers, 
    purposeOfTravel, 
    travelerType, 
    destinationCities, 
    route, 
    updateAll 
} = citySelectionSlice.actions;

export default citySelectionSlice.reducer;