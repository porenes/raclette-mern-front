import {
  CREATE_POST,
  DELETE_POST,
  LIKE_POST,
  LIST_POSTS,
  UNLIKE_POST,
} from "../actions/post.actions";

const initialState = [];

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_POSTS:
      return [...state,...payload];

    case CREATE_POST:
      
      return [payload, ...state];

    case DELETE_POST:
      return state.filter((post) => post._id !== payload.id);

    case LIKE_POST:
      return state.map((post) => {
        if (post._id === payload.postId) {
          return {
            ...post,
            likers: [payload.likerId, ...post.likers],
          };
        }
        return post;
      });
    case UNLIKE_POST:
      return state.map((post) => {
        if (post._id === payload.postId) {
          return {
            ...post,
            likers: post.likers.filter((liker) => liker !== payload.likerId),
          };
        }
        return post;
      });

    default:
      return state;
  }
};

export default postsReducer;
