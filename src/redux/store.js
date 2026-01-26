import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchTermReducer from "./slices/searchTermSlice";

const store = configureStore({
  reducer: combineReducers({
    searchTerm: searchTermReducer,
  }),
});

export default store;
