import { SET_REQUESTED_VIDEOS, SET_VIDEOS_ORDER, SET_MAX_RESULT } from "./actionTypes";

export const setRequestedVideos = (requestedVideos) => {
    return {
        type: SET_REQUESTED_VIDEOS,
        payload: requestedVideos,
    }
}

export const setVideosOrder = (videosOrder) => {
    return {
        type: SET_VIDEOS_ORDER,
        payload: videosOrder,
    }
}

export const setMaxResult = (maxResult) => {
    return {
        type: SET_MAX_RESULT,
        payload: maxResult,
    }
}