import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "../features/main/mainSlice";
import genreSlice from "../features/aside/genreSlice";

export const store = configureStore({
  reducer: {
    audio: audioReducer,
    genre: genreSlice,
  },
});
