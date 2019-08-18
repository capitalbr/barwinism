import entities from './entities_reducer';
import session from './sessions_reducer';
import errors from './errors_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  entities,
  session,
  errors,
});

export default rootReducer;