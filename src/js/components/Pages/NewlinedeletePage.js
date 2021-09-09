import React from "react";
import NewlineDelete from "../NewlineDelete/NewlineDelete"

export default class NewlinedeletePage extends React.Component {
  render() {
    return (
      <div>
        <h1>ここは改行削除のページ</h1>
        <NewlineDelete />
      </div>
    );
  }
}