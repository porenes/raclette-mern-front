import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost, listPosts } from "../../actions/post.actions";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const CreatePost = () => {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleCreatePost = async (e) => {
    await dispatch(createPost({ message }));
    dispatch(listPosts());
    cleanForm();
  };

  const cleanForm = () => {
    setMessage("");
  };

  return (
    <Row className="mb-2">
      <Col className="col-10">
        <textarea
          className="form-control"
          name="message"
          id="message"
          rows="2"
          placeholder="Say cheese..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
      </Col>
      <Col className="col-2 align-self-center">
        <Button
          type="button"
          variant="primary"
          className="float-middle "
          onClick={handleCreatePost}
        >
          Send
        </Button>
      </Col>
    </Row>
  );
};

export default CreatePost;
