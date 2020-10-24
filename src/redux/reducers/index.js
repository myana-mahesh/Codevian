import { combineReducers } from "redux";
import PostsReducer from "./reducer";
import UserReducer from './userReducer';

const rootReducer = combineReducers({
  PostsReducer,UserReducer
});
export default rootReducer;
