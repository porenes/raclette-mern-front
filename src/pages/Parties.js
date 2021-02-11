import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreateParty from "../components/Party/CreateParty";
import PartiesTimeline from "../components/Party/PartiesTimeline";

const Parties = () => {
  return (
    <Container className="p-2">
      <Row>
        <Col sm={4}>
          <CreateParty />
        </Col>
        <Col>
          <PartiesTimeline />
        </Col>
      </Row>
    </Container>
  );
};

export default Parties;
