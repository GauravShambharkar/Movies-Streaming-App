import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "movie",
  initialState: {
    movie: [],
  },
  reducers: {
    addMovie: (state, action) => {
      state.movie.push(action.payload);
    },
    
  },
});

export default DataSlice.reducer;
export const {addMovie} = DataSlice.actions