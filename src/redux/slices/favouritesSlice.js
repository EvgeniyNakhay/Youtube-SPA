import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites(state, action) {
      state.push({
        id: crypto.randomUUID(),
        searchTerm: action.payload.searchTerm,
        favouriteRequestName: action.payload.favouritesInput,
      });
    },
  },
});

export const { addToFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;
