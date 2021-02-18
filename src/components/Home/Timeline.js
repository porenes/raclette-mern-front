import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../../actions/post.actions";
import { isEmpty } from "../../Utils";
import PostCard from "../Post/PostCard";

const Timeline = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer);
  const [loadPosts, setLoadPosts] = useState(true);
  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadPosts(true);
    }
  };

  useEffect(() => {
    if (loadPosts) {
      dispatch(listPosts(10));
      setLoadPosts(false);
    }
    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, [loadPosts, dispatch]);

  return posts ? (
    <div>
      {!isEmpty(posts[0]) &&
        posts.map((post) => {
          return <PostCard post={post} key={post._id} />;
        })}
    </div>
  ) : (
    <div className="container">Rien à voir</div>
  );
};

export default Timeline;
