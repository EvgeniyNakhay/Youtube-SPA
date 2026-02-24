import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { value: "" };

export const getData = createAsyncThunk(
  "searchTerm/getData",
  async (arg, thunkAPI) => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
    })
      .then((response) => {
        if (!response.data) {
          throw new Error(response.error);
        } else {
          console.log(arg, thunkAPI);
          return response.data;
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  },
);

const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.value = action.payload;
    },
    clearInput(state) {
      state.value = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state, action) => {
        console.log(state);
        console.log(action.payload);
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.searchTerm = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        console.log(state);
        console.log(action.payload);
      });
  },
});

export const { setSearchTerm, clearInput } = searchTermSlice.actions;
export default searchTermSlice.reducer;
