// genreSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const genreSlice = createSlice({
  name: "genre",
  initialState: {
    selectedGenre: "",
  },
  reducers: {
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const { setSelectedGenre } = genreSlice.actions;

export const selectSelectedGenre = (state) => state.genre.selectedGenre;

export default genreSlice.reducer;
