import moment from "moment";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { isEmpty } from "../../Utils";
import Invite from "./Invite";

const PartyCard = ({ party }) => {
  const allUsers = useSelector((state) => state.userListReducer);
  const [addGuestsModal, setAddGuestsModal] = useState(false);
  const handleClose = () => {
    setAddGuestsModal(false);
  };

  return (
    <>
      <Card key={party._id} className="mb-3">
        <Card.Header>{`${moment(party.date).format("LL")} at ${
          party.host.name
        }'s`}</Card.Header>
        <Card.Body>
          <Card.Text>
            {party.guests.length} invité(s){" "}
            {party.seats && `pour ${party.seats} poellons`}
          </Card.Text>
          <Button
            className="btn btn-secondary float-right"
            onClick={(e) => setAddGuestsModal(!addGuestsModal)}
            data-toggle="modal"
            data-target={"#myModal" + party._id}
          >
            Add Guests
          </Button>
        </Card.Body>
      </Card>

      <Modal
        show={addGuestsModal}
        onHide={handleClose}
        key={"modal" + party._id}
      >
        <Modal.Header closeButton>
          <Modal.Title>Invite guests</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {!isEmpty(allUsers[0]) &&
              allUsers.map((user) => {
                return (
                  <ListGroup.Item
                    variant={
                      party.guests.some((guest) => guest._id === user._id) &&
                      "success"
                    }
                    key={user._id + party._id}
                  >
                    {user.name} -
                    {party.guests.some((guest) => guest._id === user._id) ? (
                      "In"
                    ) : (
                      <Invite guestId={user._id} partyId={party._id} />
                    )}
                  </ListGroup.Item>
                );
              })}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

PartyCard.propTypes = {
  party: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object),
};

export default PartyCard;
