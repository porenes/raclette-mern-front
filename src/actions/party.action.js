import axios from "axios";
export const LIST_PARTIES = "LIST_PARTIES"

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
        dispatch({ type: LIST_PARTIES, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
