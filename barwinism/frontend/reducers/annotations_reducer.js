import { RECEIVE_ANNOTATION } from "../actions/annotation_actions";
import { RECEIVE_TRACK } from "../actions/track_actions"
import merge from 'lodash/merge';

const annotationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ANNOTATION:
      return merge({}, oldState, { [action.annotation.anno_id]: action.annotation });
    case RECEIVE_TRACK:
      return merge({}, action.payload.annotations);
    default:
      return oldState;
  }
};

export default annotationsReducer;