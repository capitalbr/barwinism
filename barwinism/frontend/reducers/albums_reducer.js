import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from "../actions/album_actions";
import { RECEIVE_TRACK } from "../actions/track_actions"
import merge from 'lodash/merge';

const albumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALBUM:
      return merge({}, oldState, { [action.album.id]: action.album })
    case RECEIVE_ALBUMS:
      return action.albums
    case RECEIVE_TRACK:
      // return merge({}, oldState, action.payload.albums);
      return action.payload.albums;
    default:
      return oldState;
  }
};

export default albumsReducer;