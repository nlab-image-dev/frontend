import React from "react";
import ReactDOM from "react-dom";
import AuthArea from "./user_auth/AuthArea";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <AuthArea />
      </div>
    );
  }
}