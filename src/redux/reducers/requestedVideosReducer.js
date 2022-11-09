import { SET_REQUESTED_VIDEOS } from '../actions/actionTypes';

const initialValue = [];

export default function requestedVideosReducer(state = initialValue, action) {
    switch (action.type) {
        case SET_REQUESTED_VIDEOS: {
            return action.payload;
        }
        default: {
            return state;
        } 
    }
}