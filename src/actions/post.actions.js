import axios from "axios";

export const LIST_POSTS = "LIST_POSTS";

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