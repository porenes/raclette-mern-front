import React, { useContext } from "react";
import { UidContext } from "../AppContext";

const Card = ({ post }) => {
    const uid= useContext(UidContext)
  return (
    <div className="card mb-3" id={post.id}>
      <div className="card-body">
        <h5 className="card-title">{post.authorId}</h5>
        <div className="card-text mb-2">{post.message}</div>
      </div>
        {post.picture && (
          <img
            src={post.picture}
            alt=""
            className="card-img-bottom img-fluid"
          />
        )}
      <div className="card-footer">
        <span>
          {(uid) && (<button className="btn">🧀</button>) }
          {post.likers ? post.likers.length : "0"} cheese(s)
        </span>
        <p>
          <small className="text-muted">{post.createdAt}</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
