import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" };

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
});

export const { setSearchTerm, clearInput } = searchTermSlice.actions;
export default searchTermSlice.reducer;
