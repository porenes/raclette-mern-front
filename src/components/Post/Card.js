import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { fromNow, isEmpty } from "../../Utils";
import { UidContext } from "../AppContext";
import CheesyLike from "./CheesyLike";
import DeletePost from "./DeletePost";

const Card = ({ post }) => {
  const uid = useContext(UidContext);
  const userListData = useSelector((state) => state.userListReducer);
  return (
    <div className="card mb-3" id={post._id}>
      <div className="card-body">
        <h5 className="card-title">
          {!isEmpty(userListData[0]) &&
            userListData.find((user) => user._id === post.authorId).name}
          {uid === post.authorId && <DeletePost id={post._id} />}
        </h5>
        <div className="card-text mb-2">{post.message}</div>
      </div>
      {post.picture && (
        <img src={post.picture} alt="" className="card-img-bottom img-fluid" />
      )}
      <div className="card-footer">
        <span>
          {uid && <CheesyLike id={post._id} likers={post.likers}/>} 
          <span>{post.likers ? post.likers.length : "0"} cheese(s)</span>
        </span>

        <small className="text-muted float-right">{fromNow(post.createdAt)}</small>
      </div>
    </div>
  );
};

export default Card;
