import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import HeaderButtons from "./Header/HeaderButtons";
import HomePage from "./Pages/HomePage";
import SubmitPage from "./Pages/SubmitPage";
import UserPage from "./Pages/UserPage";
import Login from "./user_auth/Login";
import Logout from "./user_auth/Logout";

export default class DefaulPage extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <HeaderButtons /><hr/>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/user' component={UserPage}/>
            <Route exact path='/submit' component={SubmitPage}/>
            <Route exact path='/logout' component={Logout}/>
          </div>
        </Router>
      </div>
    );
  }
}