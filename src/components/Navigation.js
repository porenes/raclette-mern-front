import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "./AppContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  const uid = useContext(UidContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };
  const userData = useSelector((state) => state.userReducer);
  return (
    // TODO manage active page
    <>
      <Navbar bg="primary" expand="lg" variant="dark">
        <LinkContainer to="/" exact>
          <Navbar.Brand>Raclette Party 🧀🎉</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {uid ? (
              <>
                <LinkContainer to="/parties">
                  <Nav.Link>Soirées</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/me">
                  <Nav.Link>Moi</Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <Nav.Link disabled>Moi</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        {uid ? (
          <>
            <Nav className="justify-content-end">
              <Navbar.Text>
                Bienvenu au paradis du fromage {userData.name} &nbsp;
              </Navbar.Text>
            </Nav>
            <Button variant="primary" onClick={handleLogout}>
              <FontAwesomeIcon icon="sign-out-alt" />
            </Button>
          </>
        ) : (
          <LinkContainer to="/me">
            <Button variant="primary">
              <FontAwesomeIcon icon="sign-in-alt" />
            </Button>
          </LinkContainer>
        )}
      </Navbar>
    </>
  );
};

export default Navigation;
