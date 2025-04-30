import { createSlice } from "@reduxjs/toolkit";
import axios from "../Axios";

const movieSlice =  createSlice({


  name: "movie",
  initialState: {
    movie: [],
  },
  reducers: {
    loadMovie: (state, action) => {
      state.info = action.payload;
    },
    removeMovie: (state, action) => {
      state.info = null;
    },
  },
});

export default movieSlice.reducer;
export const { loadMovie, removeMovie } = movieSlice.actions;
