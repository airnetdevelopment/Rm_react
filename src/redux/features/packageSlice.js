import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNewPackage } from "../../api/packagePackage";

const initialState = {
    finalPackage:null,
    error:false,
    loading:true,
    meta:null
};

export const createNewPackageThunk = createAsyncThunk("package/newPackage",async(routeId,{rejectWithValue})=>{

    try{
        const res = await getNewPackage(routeId);
        return res; 
    }
    catch(err){
        return rejectWithValue(err.response.data.message || "Error fetching Routes");
    }

});

const packageSlice = createSlice({
    name:"package",
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
            .addCase(createNewPackageThunk.pending,(state)=>{
                state.loading=true;
            })
            .addCase(createNewPackageThunk.fulfilled,(state,action)=>{
                state.finalPackage = action.payload.package;
                state.loading = false;
                state.error = false;
            })
            .addCase(createNewPackageThunk.rejected,(state)=>{
                state.error = true,
                state.loading = false;
            });
    }
});

export default packageSlice.reducer;