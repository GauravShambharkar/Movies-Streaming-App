import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "movie",
  initialState: {
    movie: [],
  },
  reducers: {
    loadTv: (state, action) => {
      state.info = action.payload;
    },
    removeTv: (state, action) => {
      state.info = null
    },
  },
});

export default tvSlice.reducer;
export const { addMovie, removeTv } = tvSlice.actions;
