import { combineReducers } from "redux";
import searchTermReducer from './searchTermReducer';
// import favRequestInputReducer from './favRequestInputReducer';
import favRequestReducer from "./favRequestReducer";
import requestedVideosReducer from "./requestedVideosReducer"

export default combineReducers({
    searchTerm: searchTermReducer,
    // favRequestInput: favRequestInputReducer,
    favourites: favRequestReducer,
    requestedVideos: requestedVideosReducer,
})