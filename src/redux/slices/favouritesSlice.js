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
        sortByF: action.payload.sortByF,
        maxResult: action.payload.maxResult,
      });
    },
    removeFavourite(state, action) {
      return (state = state.filter((item) => {
        return item.id !== action.payload;
      }));
    },
    saveEditedFavRequest(state, action) {
      const editedFavourite = state.findIndex(
        (item) => item.id === action.payload.id,
      );

      state[editedFavourite].searchTerm = action.payload.editedSearchTermInput;
      state[editedFavourite].favouriteRequestName =
        action.payload.editedFavRequestInput;
      state[editedFavourite].sortByF = action.payload.editedSortByF;
      state[editedFavourite].maxResult = action.payload.editedMaxResult;
    },
  },
});

export const { addToFavourites, removeFavourite, saveEditedFavRequest } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
