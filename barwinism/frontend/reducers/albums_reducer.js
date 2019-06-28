import { RECEIVE_ALBUM } from "../actions/album_actions";
import merge from 'lodash/merge';

const albumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALBUM:
      return merge({}, oldState, { [action.album.id]: action.album })
    default:
      return oldState;
  }
};

export default albumsReducer;