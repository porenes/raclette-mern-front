import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import userListReducer from "./userList.reducer";
import postsReducer from "./posts.reducer";
import partiesReducer from "./parties.reducer";
import productsReducer from "./products.reducer";

export default combineReducers({
  userReducer,
  userListReducer,
  postsReducer,
  partiesReducer,
  productsReducer,
});
