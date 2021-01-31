import { LIST_PARTIES } from "../actions/party.action";

const initialState = {};

const partiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_PARTIES:
      return payload;

    default:
      return state;
  }
};

export default partiesReducer
