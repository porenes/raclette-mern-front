import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Parties from '../../pages/Parties.js';
import Connoisseurs from '../../pages/Connoisseurs';
import Profile from '../../pages/Profile';

const index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/parties" exact component={Parties} />
        <Route path="/connoisseurs" exact component={Connoisseurs} />
        <Route path="/me" exact component={Profile} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;