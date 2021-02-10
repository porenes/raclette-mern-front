import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../Utils";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { listPosts } from "../../actions/post.actions";
import { listParties } from "../../actions/party.action";
import { getUsersList } from "../../actions/user.actions";
import { useEffect } from "react";
import { useState } from "react";
import DeleteParty from "../Party/DeleteParty";

const Me = () => {
  const userData = useSelector((state) => state.userReducer);
  const postsData = useSelector((state) => state.postsReducer);
  const partiesData = useSelector((state) => state.partiesReducer);
  const [loadAll, setLoadAll] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadAll) {
      dispatch(listPosts());
      dispatch(listParties());
      dispatch(getUsersList());
    }
    setLoadAll(false);
  }, [loadAll, dispatch]);

  return (
    <Container className="mt-3">
      <Row>
        <Col className="col-1"></Col>
        <Col>
          <Row>
            <Col className="col-2 bg-light border border-right-0 rounded-left pl-0">
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
            <Col className="col bg-light rounded-right border border-left-0 align-item-center pt-1">
              <h2>{userData.name}</h2>
              <h5>Member since {userData.createdAt || "a lot of time"}</h5>
              <h6>
                Wrote&nbsp;
                {!isEmpty(postsData[0]) &&
                  postsData.filter((post) => {
                    return post.authorId === userData._id;
                  }).length}
                &nbsp;post(s)
              </h6>
            </Col>
          </Row>
          <Row className="row mt-2 justify-content-around">
            <Col className="col-4 border">
              <h3 className="text-center">Parties hosted</h3>
              <ul className="list-unstyled">
                {!isEmpty(partiesData.parties) &&
                  partiesData.parties.map((party) => {
                    return (
                      party.host === userData._id && (
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
            <Col className="col-4 border">
              <h3 className="text-center">Parties going to</h3>
              <ul className="list-unstyled">
                {!isEmpty(partiesData.parties) &&
                  partiesData.parties.map((party) => {
                    return (
                      party.guests.indexOf(userData._id) >= 0 &&
                      party.host !== userData._id && (
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

export default Me;
