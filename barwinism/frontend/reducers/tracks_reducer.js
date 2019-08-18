import { RECEIVE_TRACK, RECEIVE_ALL_TRACKS } from '../actions/track_actions';
import merge from 'lodash/merge';

const tracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TRACK:
      return merge({}, oldState, { [action.payload.track.id]: action.payload.track });
    case RECEIVE_ALL_TRACKS:
      return merge({}, action.tracks);
    default:
      return oldState;
  }
};

export default tracksReducer;