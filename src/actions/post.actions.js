import axios from "axios";
export const LIST_POSTS = "LIST_POSTS";
export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";

const authHeader = "Bearer " + localStorage.getItem("token");

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

export const deletePost = (id) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_RACLETTE_API_URL}post/${id}`,
      withCredentials: true,
      headers: {
        Authorization: authHeader,
      },
    }).then((res) => {
      // Dispatch to delete the post from the current list
      dispatch({ type: DELETE_POST, payload: { id } });
    });
  };
};

export const likePost = (postId, likerId) => {
  return (dispatch) => {
    // ! We do not use likerId for the API call, as the user is authenticated
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_RACLETTE_API_URL}post/like/${postId}`,
      withCredentials: true,
      headers: {
        Authorization: authHeader,
      },
    }).then((res) => {
      dispatch({ type: LIKE_POST, payload: { postId, likerId } });
    });
  };
};
export const unlikePost = (postId, likerId) => {
  // ! We do not use likerId for the API call, as the user is authenticated
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_RACLETTE_API_URL}post/unlike/${postId}`,
      withCredentials: true,
      headers: {
        Authorization: authHeader,
      },
    }).then((res) => {
      dispatch({ type: UNLIKE_POST, payload: { postId, likerId } });
    });
  };
};
