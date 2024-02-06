import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "../features/main/mainSlice";

export const store = configureStore({
  reducer: {
    audio: audioReducer,
  },
});
