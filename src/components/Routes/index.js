import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AnonHome from "../../pages/AnonHome";
import Connoisseur from "../../pages/Connoisseur";
import Connoisseurs from "../../pages/Connoisseurs";
import Home from "../../pages/Home";
import Parties from "../../pages/Parties.js";
import Profile from "../../pages/Profile";
import { isEmpty } from "../../Utils";
import { UidContext } from "../AppContext";
import Navigation from "../Navigation";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  const uid = useContext(UidContext);
  return (
    <Router>
      <Navigation />
      <div className="container-fluid bg-light">
        <Switch>
          <Route path="/me" exact component={Profile} />
          <PrivateRoute path="/parties">
            <Parties />
          </PrivateRoute>
          <PrivateRoute path="/connoisseurs">
            <Connoisseurs />
          </PrivateRoute>
          <PrivateRoute path="/connoisseur/:userId">
            <Connoisseur />
          </PrivateRoute>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route path="/" exact>
            {!isEmpty(uid) ? <Home /> : <AnonHome />}
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
