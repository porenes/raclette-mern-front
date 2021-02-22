import { GET_USERS_LIST, UNWOO, WOO } from "../actions/user.actions";

const initialState = {};

const userListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_LIST:
      return payload;
    case WOO:
      return state.map((user) => {
        // check for the wooed user in the list of users
        if (user.id === payload.wooedId) {
          user.wooers.concat(payload.wooerId);
        }
        return user;
      });
    case UNWOO:
      return state.map((user) => {
        user.id === payload.unwooedId &&
          user.wooers.filter((wooerId) => wooerId !== payload.unwooerId);
        return user;
      });
    default:
      return state;
  }
};

export default userListReducer;
