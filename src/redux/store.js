import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchTermReducer from "./slices/searchTermSlice";
import favouritesReducer from "./slices/favouritesSlice";
import isModalOpenReducer from "./slices/isModalOpenSlice";

const store = configureStore({
  reducer: combineReducers({
    searchTerm: searchTermReducer,
    favourites: favouritesReducer,
    isModalOpen: isModalOpenReducer,
  }),
});

export default store;
