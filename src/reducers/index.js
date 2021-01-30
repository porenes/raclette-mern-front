import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import userListReducer from "./userList.reducer";
import postsReducer from "./posts.reducer";

export default combineReducers({
  userReducer,
  userListReducer,
  postsReducer,
});
