import { GET_USER, UNWOO, WOO } from "../actions/user.actions";

const initialState = {};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return payload;
// TODO FIX problem with compeers
    case WOO:
      const { wooedId } = payload;
      return {
        ...state,
        wooeds: state.wooeds.concat(wooedId),
      };

    case UNWOO:
      const { unwooedId } = payload;
      return {
        ...state,
        wooeds: state.wooeds.filter((wooedId) => wooedId !== unwooedId)};

    default:
      return state;
  }
};

export default userReducer;
