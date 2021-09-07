import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Auth from './Auth';
import User from './User';
import Login from "./Login";
import Logout from "./Logout";
import List1 from "./List1";

export default class AuthArea extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Auth>
            <Switch>
              <Route exact path="/list1" component={List1} />
              <Redirect from="/" to="/list1" />
            </Switch>
          </Auth>
        </Switch>
      </Router>
    );
  }
}