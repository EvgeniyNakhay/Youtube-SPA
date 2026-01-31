import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  searchTerm: "",
  favouriteRequestName: "",
};

const activeFavouriteSlice = createSlice({
  name: "activeFavourite",
  initialState,
  reducers: {
    activeFavourite(state, action) {
      state.searchTerm = action.payload.searchTerm;
      state.favouriteRequestName = action.payload.favouriteRequestName;
    },
  },
});

export const { activeFavourite } = activeFavouriteSlice.actions;
export default activeFavouriteSlice.reducer;
