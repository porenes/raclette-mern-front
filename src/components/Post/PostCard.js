import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { fromNow, isEmpty } from "../../Utils";
import { UidContext } from "../AppContext";
import Woo from "../Connoisseur/Woo";
import CheesyLike from "./CheesyLike";
import DeletePost from "./DeletePost";
import Card from "react-bootstrap/Card";
import { Media } from "react-bootstrap";

const PostCard = ({ post }) => {
  const uid = useContext(UidContext);
  const userListData = useSelector((state) => state.userListReducer);
  const author =
    !isEmpty(userListData[0]) &&
    userListData.find((user) => user._id === post.authorId);
  return (
    <Card className="mb-3" id={post._id}>
      <Card.Header className="p-1">
        <Card.Title className="mb-0">
          <Media>
            <img
              src={
                author.picture
                  ? author.picture
                  : `https://robohash.org/${author._id}.png?size=120x120&set=set5`
              }
              alt={author.name}
              className="rounded-circle border"
              height={36}
            />
            <Media.Body className="align-self-center">
              &nbsp;{author && author.name}
            </Media.Body>
            {uid === post.authorId && <DeletePost id={post._id} />}
            {uid !== post.authorId && <Woo author={author} />}
          </Media>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text className="mb-2">{post.message}</Card.Text>
      </Card.Body>
      {post.picture && (
        <Card.Img
          src={post.picture}
          alt=""
          variant="botton"
          className="img-fluid"
        />
      )}
      <Card.Footer className="p-1">
        <span>
          {uid && <CheesyLike id={post._id} likers={post.likers} />}
          <span>&nbsp;{post.likers ? post.likers.length : "0"} cheese(s)</span>
        </span>

        <small className="text-muted float-right">
          {fromNow(post.createdAt)}
        </small>
      </Card.Footer>
    </Card>
  );
};

export default PostCard;
