import axios from "axios";

export const GET_USER = "GET_USER";

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