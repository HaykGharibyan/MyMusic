import { createSlice } from "@reduxjs/toolkit";

export const audioSlice = createSlice({
  name: "audio",
  initialState: {
    isAudioVisible: false,
    isAudioPlaying: false,
    currentAudioId: null,
    randomOrder: false,
    searchQuery: "",
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
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  toggleAudioVisibility,
  toggleAudioPlaying,
  setRandomOrder,
  setSearchQuery,
} = audioSlice.actions;

export const selectSearchQuery = (state) => state.audio.searchQuery;
export const selectAudioVisibility = (state) => state.audio.isAudioVisible;
export const selectAudioPlaying = (state) => state.audio.isAudioPlaying;
export const selectCurrentAudioId = (state) => state.audio.currentAudioId;
export const selectRandomOrder = (state) => state.audio.randomOrder;
export default audioSlice.reducer;
