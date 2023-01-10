import {SET_FAV_REQUEST} from "../actions/actionTypes";
import {v4 as uuidv4} from 'uuid';

const initialFavourites = [
    {
        searchTerm: '',
        favRequest: null,
        sortByF: 'viewCount',
        maxResultsF: 12,
    }
];

export default function favRequestReducer(state = initialFavourites, action) {
    switch (action.type) {
        case SET_FAV_REQUEST: {
            return [...state, {favRequest: action.payload}];
        }
        // case SET_QUERY_NAME_F: {
        //     return [...state, {nameF: action.payload}];
        // }
        // case SET_SORT_BY_F: {
        //     return [...state, {sortByF: action.payload}];
        // }
        // case SET_MAX_RESULTS_F: {
        //     return [...state, {maxResultsF: action.payload}];
        // }
        default: {
            return state;
        } 
    }
}