import React from "react";
import Articleoverview from "../articleoverview/Articleoverview"

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>ここは"/"のページ</h1> */}
        <Articleoverview />
      </div>
    );
  }
}