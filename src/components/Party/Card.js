import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ party }) => {
  return (
    <div className="col mb-3">
      <div className="card">
        <h5 className="card-header">{party.date}</h5>
        <div className="card-body">
          <div className="card-text">
              <FontAwesomeIcon icon="door-open" />
              {party.host}</div>
          <button className="btn btn-secondary">Guests</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  party: PropTypes.object,
};

export default Card;
