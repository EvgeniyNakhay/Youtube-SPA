import { SET_REQUEST_F, SET_REQUEST_NAME_F, SET_SORT_BY_F, SET_MAX_RESULT_F} from "../actions/actionTypes";
import {v4 as uuidv4} from 'uuid';

const initialFavourites = {
    requestF: '',
    nameF: '',
    sortByF: '',
    maxResultsF: 12,
};

export default function favRequestReducer(state = initialFavourites, action) {
    switch (action.type) {
        case SET_REQUEST_F: {
            return {...state, requestF: action.payload.requestF};
        }
        case SET_REQUEST_NAME_F: {
            return {...state, requestNameF: action.payload.requestNameF};
        }
        case SET_SORT_BY_F: {
            return {...state, sortByF: action.payload.sortByF};
        }
        case SET_MAX_RESULT_F: {
            return {...state, maxResultsF: action.payload.maxResultsF};
        }
        default: {
            return state;
        } 
    }
}