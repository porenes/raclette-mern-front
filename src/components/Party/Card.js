import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { isEmpty } from "../../Utils";
import { useDispatch, useSelector } from "react-redux";
import { addGuest } from "../../actions/party.action";
import Invite from "./Invite";

const Card = ({ party }) => {
  const { users } = useSelector((state) => state.partiesReducer);
  const allUsers = useSelector((state) => state.userListReducer);
  const [addGuestsModal, setAddGuestsModal] = useState(false);

  return (
    <>
      <div className="col mb-3">
        <div className="card">
          <h5 className="card-header">{`${moment(party.date).format("LL")} at ${
            users.find((user) => user._id === party.host).name
          }'s`}</h5>
          <div className="card-body">
            <div className="card-text">
              {party.guests.length} connoisseur(s){" "}
              {party.seats && `out of ${party.seats} seats`}
            </div>
            <button
              className="btn btn-secondary float-right"
              onClick={(e) => setAddGuestsModal(!addGuestsModal)}
              data-toggle="modal"
              data-target={"#myModal" + party._id}
            >
              Add Guests
            </button>
          </div>
        </div>
      </div>
      {addGuestsModal && (
        <div className="container">
          <div className="modal d-block" id={"#myModal" + party._id}>
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={(e) => setAddGuestsModal(false)}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <div className="card">
                  <ul className="list-group">
                    {allUsers.map((user) => {
                      return (
                        <li className="list-group">
                          {user.name} -
                          {party.guests.includes(user._id) ? (
                            "In"
                          ) : (
                            <Invite guestId={user._id} partyId={party._id} />
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Card.propTypes = {
  party: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object),
};

export default Card;
