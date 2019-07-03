import { RECEIVE_ANNOTATION } from "../actions/annotation_actions";
import merge from 'lodash/merge';

const annotationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ANNOTATION:
      return merge({}, { [action.annotation.id]: action.annotation });
    default:
      return oldState;
  }
};

export default albumsReducer;