import * as TrackAPIUtil from "../util/track_util";

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";

export const createTrack = track => {
  return dispatch => {
    return TrackAPIUtil.createTrack(track).then(track => {
      dispatch({type: RECEIVE_TRACK, payload: track})
      return track
    })
  }
}

export const fetchTrack = id => {
  return dispatch => {
    return TrackAPIUtil.fetchTrack(id).then(payload => dispatch({ type: RECEIVE_TRACK, payload }))
  }
}

export const updateTrack = track => {
  return dispatch => {
    return TrackAPIUtil.updateTrack(track).then(track => {
      dispatch({ type: RECEIVE_TRACK, payload: track })
      return track
    })
  }
}


export const fetchTracks = () => {
  return dispatch => {
    return TrackAPIUtil.fetchTracks().then(tracks => dispatch({type: RECEIVE_ALL_TRACKS, tracks}));
  }
}