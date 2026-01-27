import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const isModalOpenSlice = createSlice({
  name: "isModalOpen",
  initialState,
  reducers: {
    setIsModalOpen(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setIsModalOpen } = isModalOpenSlice.actions;
export default isModalOpenSlice.reducer;
