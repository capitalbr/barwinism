import * as TrackAPIUtil from "../util/track_util";

export const RECEIVE_TRACK = "RECEIVE_TRACK";

export const createTrack = track => {
  return dispatch => {
    return TrackAPIUtil.createTrack(track).then(track => {
      dispatch({type: RECEIVE_TRACK, payload: track})
      return track
    })
  }
}

// export const fetchTrack = id => {
//   return dispatch => {
//     return TrackAPIUtil.fetchTrack(id).then(track => dispatch({type: RECEIVE_TRACK, track}))
//   }
// }

// PAYLOAD VERSION
export const fetchTrack = id => {
  return dispatch => {
    return TrackAPIUtil.fetchTrack(id).then(payload => dispatch({ type: RECEIVE_TRACK, payload }))
  }
}