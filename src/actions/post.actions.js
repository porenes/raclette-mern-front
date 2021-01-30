import axios from "axios";

export const LIST_POSTS = "LIST_POSTS";
export const CREATE_POST = "CREATE_POST";

export const listPosts = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_RACLETTE_API_URL}post/`)
      .then((res) => {
        dispatch({ type: LIST_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
export const createPost = (data) => {
  return (dispatch) => {
    const authHeader = "Bearer " + localStorage.getItem("token");
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_RACLETTE_API_URL}post/create`,
      withCredentials: true,
      headers: {
        Authorization: authHeader,
      },
      data,
    }).then((res) => {
      //TODO handle res
      console.log(res);
    });
  };
};
