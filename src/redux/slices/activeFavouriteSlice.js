import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  searchTerm: "",
  favouriteRequestName: "",
  sortByF: "",
};

const activeFavouriteSlice = createSlice({
  name: "activeFavourite",
  initialState,
  reducers: {
    activeFavourite(state, action) {
      state.searchTerm = action.payload.searchTerm;
      state.favouriteRequestName = action.payload.favouriteRequestName;
      state.sortByF = action.payload.sortByF;
    },
  },
});

export const { activeFavourite } = activeFavouriteSlice.actions;
export default activeFavouriteSlice.reducer;
