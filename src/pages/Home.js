import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Timeline from "../components/Home/Timeline";
import CreateParty from "../components/Party/CreateParty";
import PartiesTimeline from "../components/Party/PartiesTimeline";
import CreatePost from "../components/Post/CreatePost";
import Container from "react-bootstrap/Container";
import ProductsList from "../components/Products/ProductsList";
import { Button, Col, Jumbotron, Row } from "react-bootstrap";

const Home = () => {
  const uid = useContext(UidContext);
  return (
    <div>
      {uid ? (
        <>
          <h1>We love Cheese</h1>

          <Container fluid="lg">
            <Row>
              <Col sm={3}  className="d-xs-none">
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
      ) : (
        <>
          <Jumbotron className="m-3">
            <h1>Carpe Caseum </h1>
            <p>
              Il est temps de prendre le temps, d'apprécier les bonnes choses,
              l'amitié, le partage. Raclette Party et l'antithèse du réseau
              social tel qu'on le connait. Ici, il faut prendre son temps,
              apprécier se échanges, et se rencontrer.
            </p>
            <p>
              <Button variant="primary">S'inscrire</Button>
            </p>
          </Jumbotron>
        </>
      )}
    </div>
  );
};

export default Home;
