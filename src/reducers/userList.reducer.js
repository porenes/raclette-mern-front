import { GET_USERS_LIST } from "../actions/user.actions";

const initialState = {};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_LIST:
      return payload;

    default:
      return state;
  }
};

export default userReducer;
