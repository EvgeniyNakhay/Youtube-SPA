import { SET_FAV_REQUEST_INPUT } from '../actions/actionTypes';

const initialValue = '';

export default function favRequestInputReducer(state = initialValue, action) {
    switch (action.type) {
        case SET_FAV_REQUEST_INPUT: {
            return action.payload;
        }
        default: {
            return state;
        } 
    }
}

