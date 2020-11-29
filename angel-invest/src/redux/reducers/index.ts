import { PostReducer } from './createPost'
import { combineReducers } from "redux";

export default combineReducers({
    post: PostReducer
});
