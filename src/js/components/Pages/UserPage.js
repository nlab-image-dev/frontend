import React from "react";
import Auth from "../user_auth/Auth";

export default class UserPage extends React.Component {
  render() {
    return (
      <Auth>
        <div>
          <h1>ここは"User"のページ</h1>
        </div>
      </Auth>
    );
  }
}