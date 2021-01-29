import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";

const Navbar = () => {
  const uid = useContext(UidContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };
  const userData = useSelector((state) => state.userReducer);
  return (
    // TODO manage active page
    <nav className="navbar navbar-expand-xl navbar-light bg-light">
      <NavLink exact to="/" className="navbar-brand">
        Raclette Party 🧀🎉
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" exact to="/">
            Home <span className="sr-only">(current)</span>
          </NavLink>

          <NavLink className="nav-item nav-link" exact to="/parties">
            Parties
          </NavLink>

          <NavLink className="nav-item nav-link" exact to="/connoisseurs">
            Connoisseurs
          </NavLink>
          {uid ? (
            <NavLink className="nav-item nav-link" exact to="/me">
              Me
            </NavLink>
          ) : (
            <span className="nav-item nav-link disabled">Me</span>
          )}
        </div>
      </div>

      {uid ? (
        <>
          <span className="navbar-text">
            Welcome to cheese heaven {userData.name} &nbsp;
          </span>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleLogout}
          >
            <FontAwesomeIcon icon="sign-out-alt" />
          </button>
        </>
      ) : (
        <NavLink className="btn btn-light" exact to="/me">
          <FontAwesomeIcon icon="sign-in-alt" />
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
