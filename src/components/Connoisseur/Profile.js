import moment from "moment";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listParties } from "../../actions/party.action";
import { listPosts } from "../../actions/post.actions";
import { getUsersList } from "../../actions/user.actions";
import { isEmpty } from "../../Utils";
import DeleteParty from "../Party/DeleteParty";
import Woo from "./Woo";

const Profile = (props) => {
  const userListData = useSelector((state) => state.userListReducer);
  const myData = useSelector((state) => state.userReducer);
  const postsData = useSelector((state) => state.postsReducer);
  const partiesData = useSelector((state) => state.partiesReducer);
  const [loadAll, setLoadAll] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadAll) {
      dispatch(getUsersList());
      dispatch(listPosts());
      dispatch(listParties());
    }
    setLoadAll(false);
  }, [loadAll, dispatch]);

  let userData = myData;
  if (props.userId && !isEmpty(userListData[0])) {
    console.log("getting user " + props.userId);
    userData = userListData.find((user) => {
      return user._id === props.userId;
    });
  }

  // ! does not work because of lazy loading
  // TODO improve
  const userPosts =
    !isEmpty(postsData[0]) &&
    postsData.filter((post) => {
      return post.authorId === userData._id;
    });
  return (
    <Container className="p-3">
      <Row>
        <Col className="col-1"></Col>
        <Col>
          <Row>
            <Col className="col-2 bg-white border border-right-0 rounded-left pl-0">
              <img
                src={
                  userData.picture
                    ? userData.picture
                    : `https://robohash.org/${userData._id}.png?size=120x120&set=set5`
                }
                alt={userData.name}
                className="rounded-left align-left"
              />
            </Col>
            <Col className="col bg-white rounded-right border border-left-0 align-item-center pt-1">
              <h2>
                {userData.name}{" "}
                {userData._id !== myData._id && <Woo author={userData} />}
              </h2>
              <h5>
                Membre depuis{" "}
                {moment(userData.createdAt).format("LL") || "longtemps"}
              </h5>
              <h6>
                A écrit&nbsp;
                {userPosts.length}
                &nbsp;article(s)
              </h6>
              {userPosts.length > 0 && (
                <h6>
                  A récolté{" "}
                  {userPosts.reduce((cheeses, post, i) => {
                    return cheeses + post.likers.length;
                  }, 0)}{" "}
                  fromage(s)
                </h6>
              )}
            </Col>
          </Row>
          <Row className="row mt-2 justify-content-around">
            <Col className="col-4 border bg-white ">
              <h3 className="text-center">Soirées organisées</h3>
              <ul className="list-unstyled">
                {!isEmpty(partiesData.parties) &&
                  partiesData.parties.map((party) => {
                    return (
                      party.host._id === userData._id && (
                        <li key={party._id}>
                          {moment(party.date).format("LL")} -{" "}
                          {party.guests.length}/{party.seats}{" "}
                          <DeleteParty id={party._id} />
                        </li>
                      )
                    );
                  })}
              </ul>
            </Col>
            <Col className="col-4 border bg-white ">
              <h3 className="text-center">Invitations</h3>
              <ul className="list-unstyled">
                {!isEmpty(partiesData.parties) &&
                  partiesData.parties.map((party) => {
                    return (
                      party.guests.some(
                        (guest) => guest._id === userData._id
                      ) &&
                      party.host._id !== userData._id && (
                        <li key={party._id}>
                          {moment(party.date).format("LL")} -{" "}
                          {party.guests.length}/{party.seats}
                        </li>
                      )
                    );
                  })}
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className="col-1"></Col>
      </Row>
    </Container>
  );
};

Profile.propTypes = {
  userId: PropTypes.string,
};

export default Profile;
