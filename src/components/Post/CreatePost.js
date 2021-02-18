import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/post.actions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreatePost = () => {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (message.length > 140) {
      dispatch(createPost({ message }));
      cleanForm();
    }
  };

  const cleanForm = () => {
    setMessage("");
  };

  return (
    <Row className="mb-2" >
      <Col>
        <Form.Group controlId="message">
          <Form.Control
            as="textarea"
            name="message"
            rows={3}
            placeholder="Say cheese..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            isInvalid={message.length > 0 && message.length < 140}
          ></Form.Control>
          <FormControl.Feedback type="invalid">
            On ne peut rien dire en moins de 140 caractères. Vous en avez{" "}
            {message.length}
          </FormControl.Feedback>
        </Form.Group>
      </Col>
      <Col className="align-self-center ml-1" sm={2}>
        <Button
          type="button"
          variant="primary"
          className="float-middle"
          onClick={handleCreatePost}
        >
          <FontAwesomeIcon icon="paper-plane" />
        </Button>
      </Col>
    </Row>
  );
};

export default CreatePost;
