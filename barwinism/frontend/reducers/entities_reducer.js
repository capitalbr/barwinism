import {combineReducers} from "redux";
import users from "./users_reducer";
import tracks from "./tracks_reducer";
import artists from "./artists_reducer";
import albums from "./albums_reducer";
import annotations from "./annotations_reducer";
import splash from './splash_reducer';


const entitiesReducer = combineReducers({
  users,
  tracks,
  artists,
  albums,
  annotations,
  splash
})
export default entitiesReducer;