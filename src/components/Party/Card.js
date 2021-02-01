import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

const Card = ({ party, users }) => {
  return (
    <div className="col mb-3">
      <div className="card">
        <h5 className="card-header">{`${moment(party.date).format("LL")} at ${
          users.find((user) => user._id === party.host).name
        }'s`}</h5>
        <div className="card-body">
          <div className="card-text">
            {party.guests.length} connoisseur(s) {(party.seats) && `out of ${party.seats} seats`}
          </div>
          <button className="btn btn-secondary float-right">Details</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  party: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object),
};

export default Card;
