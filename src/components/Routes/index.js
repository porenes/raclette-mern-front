import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Connoisseur from "../../pages/Connoisseur";
import Connoisseurs from "../../pages/Connoisseurs";
import Home from "../../pages/Home";
import Parties from "../../pages/Parties.js";
import Profile from "../../pages/Profile";
import Navigation from "../Navigation";

const index = () => {
  return (
    <Router>
      <Navigation />
      <div className="container-fluid bg-light">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/parties" exact component={Parties} />
          <Route path="/connoisseurs" exact component={Connoisseurs} />
          <Route path="/me" exact component={Profile} />
          <Route path="/connoisseur/:userId" component={Connoisseur} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default index;
