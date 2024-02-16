import { createSlice } from "@reduxjs/toolkit";

export const audioSlice = createSlice({
  name: "audio",
  initialState: {
    isAudioVisible: false,
    isAudioPlaying: false,
    isFavoritesListVisibility: false,
    canciErevaly: true,
    currentAudioId: null,
    randomOrder: false,
    searchQuery: "",
    favorites: [],
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
    toggleFavoritesListVisibility: (state, action) => {
      state.isFavoritesListVisibility = !state.isFavoritesListVisibility;
      state.canciErevaly = !state.canciErevaly;
    },

    toggleAddFavoritesList: (state, action) => {
      state.currentAudioId = action.payload;
      state.favorites.push(state.currentAudioId);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
});

export const {
  toggleFavoritesListVisibility,
  toggleAudioVisibility,
  toggleAudioPlaying,
  setRandomOrder,
  setSearchQuery,
  toggleDeleteFavorite,
  toggleAddFavoritesList,
} = audioSlice.actions;

export const removeFromFavorites = (id) => ({
  type: "audio/removeFromFavorites",
  payload: id,
});
export const selectSearchQuery = (state) => state.audio.searchQuery;
export const selectAudioVisibility = (state) => state.audio.isAudioVisible;
export const selectAudioPlaying = (state) => state.audio.isAudioPlaying;
export const selectCurrentAudioId = (state) => state.audio.currentAudioId;
export const selectRandomOrder = (state) => state.audio.randomOrder;
export const selectFavorites = (state) => state.audio.favorites;
export const selectFavoritesListVisibility = (state) =>
  state.audio.isFavoritesListVisibility;
export const selectCanciErevaly = (state) => state.audio.canciErevaly;

export default audioSlice.reducer;
