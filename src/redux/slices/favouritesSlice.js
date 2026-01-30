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
    removeFavourite(state, action) {
      return (state = state.filter((item) => {
        item.id !== action.payload;
      }));
    },
  },
});

export const { addToFavourites, removeFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
