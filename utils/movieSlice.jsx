import { createSlice } from "@reduxjs/toolkit";
import useUpcomingMovies from "../src/hooks/useUpcomingMovies";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    video: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addVideo: (state, action) => {
      state.video = action.payload;
    },
  },
});

export const {
  addNowPlaying,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addVideo,
} = movieSlice.actions;

export default movieSlice.reducer;
