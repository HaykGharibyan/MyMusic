import { createSlice } from "@reduxjs/toolkit";

export const audioSlice = createSlice({
  name: "audio",
  initialState: {
    isAudioVisible: false,
    currentAudio: {
      id: null,
      isPlaying: false,
    },
    isFavoritesListVisibility: false,
    mainPageVisibility: true,
    randomOrder: false,
    searchQuery: "",
    favorites: [],
    tracks: [],
    currentPage: 1,
    isLoading: true,
    isMenuOpen: false,
    visibleSongs: 13,
    currentTrackIndex: 0,
  },

  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleAudioVisibility: (state) => {
      state.isAudioVisible = !state.isAudioVisible;
    },
    setCurrentTrackIndex: (state, action) => {
      state.currentTrackIndex = action.payload;
    },
    toggleAudioPlaying: (state, action) => {
      state.currentAudio = {
        id: action.payload,
        isPlaying: !state.currentAudio.isPlaying,
      };
    },
    setRandomOrder: (state) => {
      state.randomOrder = true;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    toggleFavoritesListVisibility: (state) => {
      state.isFavoritesListVisibility = !state.isFavoritesListVisibility;
      state.mainPageVisibility = !state.mainPageVisibility;
    },
    toggleAddFavoritesList: (state, action) => {
      state.favorites.push(action.payload);
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
    setVisibleSongs: (state, action) => {
      state.visibleSongs = action.payload;
    },
  },
});

export const {
  toggleFavoritesListVisibility,
  toggleAudioVisibility,
  toggleAudioPlaying,
  setRandomOrder,
  setSearchQuery,
  toggleAddFavoritesList,
  setTracks,
  setCurrentPage,
  setIsLoading,
  toggleMenu,
  setVisibleSongs,
  setCurrentTrackIndex,
} = audioSlice.actions;

export const removeFromFavorites = (id) => ({
  type: "audio/removeFromFavorites",
  payload: id,
});

export const selectCurrentTrackIndex = (state) => state.audio.currentTrackIndex;
export const selectSearchQuery = (state) => state.audio.searchQuery;
export const selectAudioVisibility = (state) => state.audio.isAudioVisible;
export const selectCurrentAudio = (state) => state.audio.currentAudio;
export const selectFavorites = (state) => state.audio.favorites;
export const selectFavoritesListVisibility = (state) =>
  state.audio.isFavoritesListVisibility;
export const selectMainPageVisibility = (state) =>
  state.audio.mainPageVisibility;
export const selectMenuState = (state) => state.audio.isMenuOpen;
export const selectVisibleSongs = (state) => state.audio.visibleSongs;
export const selectAudioPlaying = (state) => state.audio.currentAudio.isPlaying;
export const selectCurrentAudioId = (state) => state.audio.currentAudio.id;

export default audioSlice.reducer;
