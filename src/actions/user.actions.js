import axios from "axios";

export const GET_USER = "GET_USER";
export const GET_USERS_LIST = "GET_USERS_LIST";
export const WOO = "WOO";
export const UNWOO = "UNWOO";
export const WOOED = "WOOED";
export const UNWOOED = "UNWOOED";

const authHeader = "Bearer " + localStorage.getItem("token");

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

export const woo = (wooedId) => {
  return (dispatch, getState) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_RACLETTE_API_URL}connoisseur/woo/${wooedId}`,
      withCredentials: true,
      headers: {
        Authorization: authHeader,
      },
    }).then((res) => {
      dispatch({type: WOO, payload: {wooedId}})
      dispatch({type: WOOED, payload: {wooedId, wooer: getState().userReducer._id}})
      
      console.log(res);
    });
  };
};
export const unwoo = (unwooedId) => {
  
  return (dispatch, getState) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_RACLETTE_API_URL}connoisseur/unwoo/${unwooedId}`,
      withCredentials: true,
      headers: {
        Authorization: authHeader,
      },
    }).then((res) => {
      dispatch({type: UNWOO, payload: {unwooedId}})
      dispatch({type: UNWOOED, payload: {unwooedId, unwooer: getState().userReducer._id}})
      console.log(res);
    });
  };
};


