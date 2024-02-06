import { createSlice } from "@reduxjs/toolkit";

export const audioSlice = createSlice({
  name: "audio",
  initialState: {
    isAudioVisible: false,
    isAudioPlaying: false,
    currentAudioId: null, // добавляем поле для хранения идентификатора текущей играющей песни
  },
  reducers: {
    toggleAudioVisibility: (state) => {
      state.isAudioVisible = !state.isAudioVisible;
    },
    toggleAudioPlaying: (state, action) => {
      state.isAudioPlaying = !state.isAudioPlaying;
      state.currentAudioId = action.payload; // сохраняем идентификатор текущей играющей песни
    },
  },
});

export const { toggleAudioVisibility, toggleAudioPlaying } = audioSlice.actions;

export const selectAudioVisibility = (state) => state.audio.isAudioVisible;
export const selectAudioPlaying = (state) => state.audio.isAudioPlaying;
export const selectCurrentAudioId = (state) => state.audio.currentAudioId; // добавляем селектор для получения идентификатора текущей играющей песни

export default audioSlice.reducer;
