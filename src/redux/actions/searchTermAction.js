import { SET_SEARCH_TERM } from "./actionTypes";

export const setSearchTerm = (searchTerm) => {
    return {
        type: SET_SEARCH_TERM,
        payload: searchTerm,
    }
}