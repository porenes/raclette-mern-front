import React from "react";
import ReactDOM from "react-dom";
// Redux imports
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { listPosts } from "./actions/post.actions";
// Thunk makes it possible to use async actions
import thunk from "redux-thunk";
// Font Awesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { getUsersList as listUsers } from "./actions/user.actions";

// Adding font awesome solid
library.add(fas);

// Create Redux store and user DevTools
// TODO Separate dev from prod
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(listPosts());
store.dispatch(listUsers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
