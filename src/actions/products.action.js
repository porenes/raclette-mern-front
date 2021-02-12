import axios from "axios";
export const LIST_PRODUCTS = "LIST_PRODUCTS";

const authHeader = "Bearer " + localStorage.getItem("token");

export const listProducts = () => {
  return (dispatch) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_RACLETTE_API_URL}products/raclettes`,
      withCredentials: true,
      headers: {
        Authorization: authHeader,
      },
    })
      .then((res) => {
        dispatch({
          type: LIST_PRODUCTS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
