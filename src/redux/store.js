import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchTermReducer from "./slices/searchTermSlice";
import favouritesReducer from "./slices/favouritesSlice";

const store = configureStore({
  reducer: combineReducers({
    searchTerm: searchTermReducer,
    favourites: favouritesReducer,
  }),
});

export default store;
