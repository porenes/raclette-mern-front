import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";

const DeletePost = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deletePost(props.id));
  return (
    <button
      type="button"
      className="btn btn-outline-danger float-right"
      onClick={handleDelete}
    >
      <FontAwesomeIcon icon="trash-alt" />
    </button>
  );
};

export default DeletePost;
