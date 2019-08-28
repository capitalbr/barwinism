import * as TrackAPIUtil from "../util/track_util";
import {RECEIVE_SESSION_ERRORS, receiveErrors} from "./session_actions"

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";

export const createTrack = track => {
  return dispatch => {
    return TrackAPIUtil.createTrack(track).then(track => {
      return dispatch({type: RECEIVE_TRACK, payload: track})
      // return track
    }, err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
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
      return dispatch({ type: RECEIVE_TRACK, payload: track })
      // return track
    }, err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  }
}


export const fetchTracks = () => {
  return dispatch => {
    return TrackAPIUtil.fetchTracks().then(tracks => dispatch({type: RECEIVE_ALL_TRACKS, tracks}));
  }
}