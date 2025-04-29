import { createSlice } from "@reduxjs/toolkit";
import axios from "../Axios";

const movieSlice =  createSlice({


  name: "movie",
  initialState: {
    movie: [],
  },
  reducers: {
    loadMovie: (id) => (state, action) => {
      state.info = action.payload;
    },
    removeMovie: (state, action) => {
      state.info = null;
    },
  },
});

export default movieSlice.reducer;
export const { addMovie, removeMovie } = movieSlice.actions;
