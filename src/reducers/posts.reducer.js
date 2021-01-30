import { DELETE_POST, LIST_POSTS } from "../actions/post.actions";

const initialState = {};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_POSTS:
      return payload;

    case DELETE_POST:
      return state.filter((post) => post._id !== payload.id);

    default:
      return state;
  }
};

export default postsReducer;
