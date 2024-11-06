import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPossibleRoutes } from "../../api/routeSelection";

const initialState = {
    allRoutes:[],
    loading:true,
    error:false,
    selectedRoute:[]
};

export const getAllPossibleRoutesThunk = createAsyncThunk( "routes/allPossibleRoutes", async (travellingDetails,{rejectWithValue})=>{
    try{
        const res = await getAllPossibleRoutes(travellingDetails);
        return res; 
    }
    catch(err){
        return rejectWithValue(err.response.data.message || "Error fetching Routes");
    }
} );

const routeSelectionSlice = createSlice({
    name:"routeSelection",
    initialState,
    reducers :{
        updateSelectedRoute : (state,action)=>{
            console.log(action.payload);
            state.selectedRoute = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(getAllPossibleRoutesThunk.pending,(state)=>{
                console.log("pending");
                state.loading = true;
                state.error = false;
            })
            .addCase(getAllPossibleRoutesThunk.fulfilled,(state,action)=>{
                console.log("fulfilled");
                state.allRoutes = action.payload.routes;
                state.loading = false;
                state.error = false;
            })
            .addCase(getAllPossibleRoutesThunk.rejected,(state)=>{
                console.log("rejected");
                state.loading = false;
                state.error = true;
            });
    }
});

export const {updateSelectedRoute } = routeSelectionSlice.actions;

export default routeSelectionSlice.reducer;
