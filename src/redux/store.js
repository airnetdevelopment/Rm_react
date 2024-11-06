import { configureStore } from "@reduxjs/toolkit";
import citySelectionReducer from "./features/citySelectionSlice";
import routeSelectionReducer from "./features/routeSelectionSlice";
import packageCreationReducer from "./features/packageSlice";

export const store = configureStore({

    reducer:{
        citySelection: citySelectionReducer,
        routeSelection:routeSelectionReducer,
        packageCreation: packageCreationReducer
    }

});