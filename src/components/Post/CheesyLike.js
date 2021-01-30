import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { UidContext } from "../AppContext";
import { useDispatch } from "react-redux";
import { likePost, unlikePost } from "../../actions/post.actions";

const CheesyLike = (props) => {
  const uid = useContext(UidContext);
  const initialState = props.likers
    ? props.likers.find((liker) => liker === uid)
    : false;
  const [liked, setLiked] = useState(initialState);
  const dispatch = useDispatch();

  const switchLike = () => {
    liked ? dispatch(unlikePost(props.id, uid)) : dispatch(likePost(props.id, uid));
    setLiked(!liked);
  };
  return (
    <button className={liked ? "btn btn-primary" : "btn"} onClick={switchLike}>
      🧀
    </button>
  );
};

CheesyLike.propTypes = {
  id: PropTypes.string.isRequired,
  likers: PropTypes.arrayOf(PropTypes.string),
};

export default CheesyLike;
