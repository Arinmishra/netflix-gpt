import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    addGptSearch: (state, action) => {
      state.showGptSearch = action.payload;
    },
  },
});

export const { addGptSearch } = gptSlice.actions;

export default gptSlice.reducer;
