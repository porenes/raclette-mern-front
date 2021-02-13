import React from "react";
import PropTypes from "prop-types";
import { addGuest } from "../../actions/party.action";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";

const Invite = ({ partyId, guestId }) => {
  const dispatch = useDispatch();
  const invite = () => {
    dispatch(addGuest(guestId, partyId));
  };
  return (
    <Button variant="success" onClick={invite}>
      Inviter
    </Button>
  );
};

Invite.propTypes = {
  partyId: PropTypes.string,
  guestId: PropTypes.string,
};

export default Invite;
