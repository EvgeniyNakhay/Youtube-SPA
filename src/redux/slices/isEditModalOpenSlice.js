import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const isEditModalOpenSlice = createSlice({
  name: "isEditModalOpen",
  initialState,
  reducers: {
    setIsEditModalOpen(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setIsEditModalOpen } = isEditModalOpenSlice.actions;
export default isEditModalOpenSlice.reducer;
