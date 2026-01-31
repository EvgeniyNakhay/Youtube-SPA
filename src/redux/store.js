import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchTermReducer from "./slices/searchTermSlice";
import favouritesReducer from "./slices/favouritesSlice";
import isModalOpenReducer from "./slices/isModalOpenSlice";
import isEditModalOpenReducer from "./slices/isEditModalOpenSlice";
import activeFavouriteReducer from "./slices/activeFavouriteSlice";

const store = configureStore({
  reducer: combineReducers({
    searchTerm: searchTermReducer,
    favourites: favouritesReducer,
    isModalOpen: isModalOpenReducer,
    isEditModalOpen: isEditModalOpenReducer,
    activeFavourite: activeFavouriteReducer,
  }),
});

export default store;
