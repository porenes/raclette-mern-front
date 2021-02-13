import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "./AppContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

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
        <Navbar.Brand href="/">Raclette Party 🧀🎉</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/parties">Soirées</Nav.Link>
            {uid ? (
              <Nav.Link href="/me">Moi</Nav.Link>
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
          <Button variant="primary" href="/me">
            <FontAwesomeIcon icon="sign-in-alt" />
          </Button>
        )}
      </Navbar>
    </>
  );
};

export default Navigation;
