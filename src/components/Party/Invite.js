import React from "react";
import PropTypes from "prop-types";
import { addGuest } from "../../actions/party.action";
import { useDispatch } from "react-redux";

const Invite = ({ partyId, guestId }) => {
    const dispatch = useDispatch()
    const invite = () => {
        dispatch(addGuest(guestId, partyId));
      }
  return (
    <button className="btn btn-success" onClick={invite}>
      Invite
    </button>
  );
};

Invite.propTypes = {
  partyId: PropTypes.string,
  guestId: PropTypes.string,
};

export default Invite;
