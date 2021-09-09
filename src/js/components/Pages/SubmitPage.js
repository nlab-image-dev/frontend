import React from "react";
import Auth from "../user_auth/Auth";

export default class SubmitPage extends React.Component {
  render() {
    return (
      <Auth>
        <div>
          <h1>ここは投稿ページ</h1>
        </div>
      </Auth>
    );
  }
}