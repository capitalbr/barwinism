import { RECEIVE_NEWS } from "../actions/splash_actions";
import merge from 'lodash/merge';

const splashReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_NEWS:
      return action.news;
    default:
      return oldState;
  }
};

export default splashReducer;