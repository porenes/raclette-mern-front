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
    <div className="card mb-3">
      <div className="card-body">
        <div className="card-text mb-2">
          <div class="form-group">
            <textarea
              className="form-control"
              name="message"
              id="message"
              rows="3"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleCreatePost}
          >
            Send
          </button>
        </div>
      </div>
      <div className="card-footer"></div>
    </div>
  );
};

export default CreatePost;
