import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ party , users}) => {
  return (
    <div className="col mb-3">
      <div className="card">
        <h5 className="card-header">{party.date}</h5>
        <div className="card-body">
          <div className="card-text">
              <FontAwesomeIcon icon="door-open" />
              {users.find((user) => user._id ===party.host).name}</div>
          <button className="btn btn-secondary">Guests</button>
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
