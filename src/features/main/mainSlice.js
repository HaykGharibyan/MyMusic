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
    tracks: [],
    currentPage: 1,
    isLoading: true,
    currentTrack: null,
    isPlaying: false,
    isMenuOpen: false,
  },

  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
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
    toggleFavoritesListVisibility: (state) => {
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
    setTracks(state, action) {
      state.tracks = [...state.tracks, ...action.payload];
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setCurrentTrack(state, action) {
      state.currentTrack = action.payload;
    },
    setIsPlaying(state, action) {
      state.isPlaying = action.payload;
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
  setTracks,
  setCurrentPage,
  setIsLoading,
  setCurrentTrack,
  setIsPlaying,
  toggleMenu,
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

export const selectMenuState = (state) => state.audio.isMenuOpen;

export default audioSlice.reducer;
