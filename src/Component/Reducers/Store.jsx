import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./Slice"

export const Store = configureStore({
    reducer:{
        movieReducer: DataSlice
    }
    
})
