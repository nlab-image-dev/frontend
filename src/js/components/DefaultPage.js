import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Header from "./Header/Header";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import Login from "./user_auth/Login";
import Logout from "./user_auth/Logout";

export default class DefaulPage extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header /><hr/>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/User' component={UserPage}/>
            <Route exact path='/logout' component={Logout}/>
          </div>
        </Router>
      </div>
    );
  }
}