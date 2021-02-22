import {
  ADD_GUEST,
  CREATE_PARTY,
  DELETE_PARTY,
  LIST_PARTIES,
} from "../actions/party.action";
import moment from "moment";

const initialState = {};

const partiesReducer = (state = initialState, { type, payload }) => {
  const { parties } = state;
  switch (type) {
    case LIST_PARTIES:
      return payload;

    case CREATE_PARTY:
      const { party } = payload;

      return {
        parties: [...parties, party].sort(
          (pa, pb) => moment(pa.date) - moment(pb.date)
        ),
      };

    case ADD_GUEST:
      return {
        parties: parties.map((party) => {
          return party._id === payload._id
            ? { ...party, guests: payload.guests }
            : party;
        }),
      };

    case DELETE_PARTY:
      return {
        parties: parties.filter((party) => party._id !== payload.id),
      };

    default:
      return state;
  }
};

export default partiesReducer;
