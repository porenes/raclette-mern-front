import axios from "axios";
export const LIST_PARTIES = "LIST_PARTIES";
export const CREATE_PARTY = "CREATE_PARTY";
export const ADD_GUEST = "ADD_GUEST";
export const DELETE_PARTY = "DELETE_PARTY";

const authHeader = "Bearer " + localStorage.getItem("token");

export const listParties = () => {
  return (dispatch) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_RACLETTE_API_URL}party`,
      withCredentials: true,
      headers: {
        Authorization: authHeader,
      },
    })
      .then((res) => {
        dispatch({
          type: LIST_PARTIES,
          payload: {
            parties: res.data,
          },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const createParty = (data) => {
  return (dispatch) => {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_RACLETTE_API_URL}party/create`,
      withCredentials: true,
      headers: {
        Authorization: authHeader,
      },
      data,
    })
      .then((res) => {
        const party = res.data;

        dispatch({
          type: CREATE_PARTY,
          payload: {
            party,
          },
        }).catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
};

export const addGuest = (guestId, partyId) => {
  return (dispatch) => {
    const guests = [guestId];
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_RACLETTE_API_URL}party/addGuests/${partyId}`,
      withCredentials: true,
      headers: {
        Authorization: authHeader,
      },
      data: { guests },
    }).then((res) => dispatch({ type: ADD_GUEST, payload: res.data }));
  };
};

export const deleteParty = (id) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_RACLETTE_API_URL}party/${id}`,
      withCredentials: true,
      headers: {
        Authorization: authHeader,
      },
    }).then((res) => {
      // Dispatch to delete the post from the current list
      dispatch({ type: DELETE_PARTY, payload: { id } });
    });
  };
};
