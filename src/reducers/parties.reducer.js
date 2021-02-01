import { CREATE_PARTY, LIST_PARTIES } from "../actions/party.action";

const initialState = {};

const partiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_PARTIES:
      return payload;

    case CREATE_PARTY:
      const { parties, users } = state;
      const { party, partyUsers } = payload;
      parties.push(party);
      users.concat(partyUsers);
      return {
        parties,
        users,
      };

    default:
      return state;
  }
};

export default partiesReducer;
