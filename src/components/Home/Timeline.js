import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../Utils";
import Card from "../Post/Card";

const Timeline = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer);

  useEffect(() => {
    return () => {};
  }, [dispatch]);

  return posts ? (
    <div>
      {!isEmpty(posts[0]) &&
        posts.map((post) => {
          return <Card post={post} key={post._id} />;
        })}
    </div>
  ) : (
    <div className="container">Nothing here</div>
  );
};

export default Timeline;
