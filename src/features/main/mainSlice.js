import { createSlice } from "@reduxjs/toolkit";

export const audioSlice = createSlice({
  name: "audio",
  initialState: {
    isAudioVisible: false,
    isAudioPlaying: false,
    currentAudioId: null,
    randomOrder: false,
  },
  reducers: {
    toggleAudioVisibility: (state) => {
      state.isAudioVisible = !state.isAudioVisible;
    },
    toggleAudioPlaying: (state, action) => {
      state.isAudioPlaying = !state.isAudioPlaying;
      state.currentAudioId = action.payload;
    },
    setRandomOrder: (state) => {
      state.randomOrder = true;
    },
  },
});

export const { toggleAudioVisibility, toggleAudioPlaying, setRandomOrder } =
  audioSlice.actions;

export const selectAudioVisibility = (state) => state.audio.isAudioVisible;
export const selectAudioPlaying = (state) => state.audio.isAudioPlaying;
export const selectCurrentAudioId = (state) => state.audio.currentAudioId;
export const selectRandomOrder = (state) => state.audio.randomOrder;
export default audioSlice.reducer;
