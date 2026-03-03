import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

const API_KEY = import.meta.env.VITE_API_KEY;
// const dataUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&order=relevance&q=${searchTerm}&key=${API_KEY}`;

// export const getData = createAsyncThunk(
//   "favourites/getData",
//   async (arg, thunkAPI) => {
//     axios({
//       method: "GET",
//       url: dataUrl,
//     })
//       .then((response) => {
//         if (!response.data) {
//           throw new Error(response.error);
//         } else {
//           setData(response.data.items);
//         }
//       })
//       .catch(function (error) {
//         console.log(error.response.data.error.message);
//       });
//   },
// );

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
