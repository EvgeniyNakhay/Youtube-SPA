import { SET_REQUESTED_VIDEOS } from "./actionTypes";

export const setRequestedVideos = (requestedVideos) => {
    return {
        type: SET_REQUESTED_VIDEOS,
        payload: requestedVideos,
    }
}
