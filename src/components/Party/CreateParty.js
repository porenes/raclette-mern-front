import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createParty } from "../../actions/party.action";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormCheck } from "react-bootstrap";

const CreateParty = () => {
  const [date, setDate] = useState(
    moment().format(moment.HTML5_FMT.DATETIME_LOCAL)
  );
  const [seats, setSeats] = useState(6);
  const [isPrivate, setIsPrivate] = useState(true);
  const [alertCP, setAlertCP] = useState(null);

  const dispatch = useDispatch();

  const handleCreateParty = async (e) => {
    setAlertCP(null);
    dispatch(createParty({ date, seats, isPrivate })).then(() => {
      setAlertCP("Party created !");
      cleanForm();
    });
  };

  const cleanForm = () => {
    setDate(Date.now());
  };

  return (
    <Container className="bg-light rounded p-2">
      <Alert
        show={alertCP}
        variant="primary"
        dismissible
        onClose={() => setAlertCP(null)}
      >
        <p>{alertCP}</p>
      </Alert>
      <h4>Partagez votre 🧀 !</h4>
      <Form.Group controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="datetime-local"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={moment().format(moment.HTML5_FMT.DATETIME_LOCAL)}
        ></Form.Control>
        <Form.Text className="text-muted">Should be in the future</Form.Text>
      </Form.Group>
      <Form.Group controlId="isPrivate">
        <Form.Check>
          <FormCheck.Input
            type="checkbox"
            checked={isPrivate}
            onChange={() => setIsPrivate(!isPrivate)}
            inline="true"
          />
          <FormCheck.Label>Soirée VIP</FormCheck.Label>
        </Form.Check>
      </Form.Group>
      <Row className="align-items-end">
        <Col>
          <Form.Group controlId="seats">
            <Form.Label>Seats</Form.Label>
            <Form.Control
              type="number"
              className="form-control"
              name="seats"
              aria-describedby="seatsHelp"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCreateParty}
            >
              Lancer 🎉
            </button>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateParty;
