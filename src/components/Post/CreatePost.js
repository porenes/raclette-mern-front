import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost, listPosts } from "../../actions/post.actions";

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
    <div className="row mb-2">
      <div className="col-10">
        <textarea
          className="form-control"
          name="message"
          id="message"
          rows="2"
          placeholder="Say cheese..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
      </div>
      <div className="col-2 align-self-center">
        <button
          type="button"
          className="btn btn-primary float-middle "
          onClick={handleCreatePost}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
