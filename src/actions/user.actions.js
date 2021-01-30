import axios from "axios";

export const GET_USER = "GET_USER";
export const GET_USERS_LIST = "GET_USERS_LIST";

export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_RACLETTE_API_URL}connoisseur/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getUsersList = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_RACLETTE_API_URL}connoisseur`)
      .then((res) => {
        dispatch({ type: GET_USERS_LIST, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
