import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {UidContext} from "./AppContext";

const Navbar = () => {
  const uid = useContext(UidContext);
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
          <NavLink className="nav-item nav-link active" exact to="/">
            Home <span className="sr-only">(current)</span>
          </NavLink>

          <NavLink className="nav-item nav-link" exact to="/parties">
            Parties
          </NavLink>

          <NavLink className="nav-item nav-link" exact to="/connoisseurs">
            Connoisseurs
          </NavLink>
        </div>
      </div>

      {uid ? (
        <span className="navbar-text">Welcome to cheese heaver **name**</span>
      ) : (
        <NavLink className="nav-item nav-link" exact to="/me">
          ⇥
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
