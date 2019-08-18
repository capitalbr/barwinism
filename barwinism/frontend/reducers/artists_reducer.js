import { RECEIVE_ARTIST } from "../actions/artist_actions";
import merge from 'lodash/merge';

const artistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ARTIST:
      return merge({}, oldState, { [action.artist.id]: action.artist})
    default:
      return oldState;
  }
};

export default artistsReducer;