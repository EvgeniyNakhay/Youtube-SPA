import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchTermReducer from "./slices/searchTermSlice";
import favouritesReducer from "./slices/favouritesSlice";
import isModalOpenReducer from "./slices/isModalOpenSlice";
import isEditModalOpenReducer from "./slices/isEditModalOpenSlice";

const store = configureStore({
  reducer: combineReducers({
    searchTerm: searchTermReducer,
    favourites: favouritesReducer,
    isModalOpen: isModalOpenReducer,
    isEditModalOpen: isEditModalOpenReducer,
  }),
});

export default store;
