import React, { useContext } from "react";
import { Button, Col, Jumbotron, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { UidContext } from "../components/AppContext";
import Timeline from "../components/Home/Timeline";
import CreateParty from "../components/Party/CreateParty";
import PartiesTimeline from "../components/Party/PartiesTimeline";
import CreatePost from "../components/Post/CreatePost";
import ProductsList from "../components/Products/ProductsList";
const Home = () => {
  const uid = useContext(UidContext);

  return (
    uid && (
      <>
        <Container fluid="lg" className="pt-3">
          <Row>
            <Col sm={3} className="d-xs-none">
              <ProductsList />
            </Col>
            <Col>
              <CreatePost />
              <Timeline />
            </Col>
            <Col lg={3} className="d-sm-none d-md-block">
              <CreateParty />
              <Container className="bg-light rounded p-2">
                <PartiesTimeline />
              </Container>
            </Col>
          </Row>
        </Container>
      </>
    )
  );
};

export default Home;
