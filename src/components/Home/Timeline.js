import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../../actions/post.actions";
import { isEmpty } from "../../Utils";
import Card from "../Post/Card";

const Timeline = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer);
  const [loadPosts, setLoadPosts] = useState(true);

  useEffect(() => {
    if (loadPosts) dispatch(listPosts());
    setLoadPosts(false);
  }, [loadPosts,dispatch]);

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
