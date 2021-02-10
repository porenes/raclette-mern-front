import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteParty } from "../../actions/party.action";
import Button from "react-bootstrap/Button";

const DeleteParty = (props) => {
  const dispatch = useDispatch();

  //TODO add warning before deletion
  const handleDelete = () => dispatch(deleteParty(props.id));
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

export default DeleteParty;
