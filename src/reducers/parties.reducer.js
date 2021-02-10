import { ADD_GUEST, CREATE_PARTY, LIST_PARTIES } from "../actions/party.action";

const initialState = {};

const partiesReducer = (state = initialState, { type, payload }) => {
  const { parties, users } = state;
  switch (type) {
    case LIST_PARTIES:
      return payload;

    case CREATE_PARTY:
      const { party, partyUsers } = payload;
      parties.push(party);
      users.concat(partyUsers);
      return {
        parties,
        users,
      };

    case ADD_GUEST:
      return {
        parties: parties.map((party) => {
          return party._id === payload._id
            ? { ...party, guests: payload.guests }
            : party;
        }),
        users,
      };

    default:
      return state;
  }
};

export default partiesReducer;
