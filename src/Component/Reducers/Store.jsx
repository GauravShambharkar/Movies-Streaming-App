import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice"
import tvSlice from './tvSlice'

export const Store = configureStore({
    reducer:{
        movieReducer: movieSlice,
        TvReducer: tvSlice
    }
    
})
