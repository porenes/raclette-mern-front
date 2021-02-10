import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";
import Button from "react-bootstrap/Button";

const DeletePost = (props) => {
  const dispatch = useDispatch();

  //TODO add warning before deletion
  const handleDelete = () => dispatch(deletePost(props.id));
  return (
    <Button
      variant="outline-danger"
      size="sm"
      type="button"
      className="float-right"
      onClick={handleDelete}
    >
      <FontAwesomeIcon icon="trash-alt" />
    </Button>
  );
};

export default DeletePost;
