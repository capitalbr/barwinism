import { RECEIVE_TRACK } from '../actions/track_actions';
import merge from 'lodash/merge';

const tracksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TRACK:
      return merge({}, oldState, { [action.payload.track.id]: action.payload.track });
    default:
      return oldState;
  }
};

// PAYLOAD VERSION
// const tracksReducer = (oldState = {}, action) => {
//   Object.freeze(oldState);
//   switch (action.type) {
//     case RECEIVE_TRACK:
//       return merge({}, oldState, { [action.payload.track.id]: action.payload.track });
//     default:
//       return oldState;
//   }
// };

export default tracksReducer;