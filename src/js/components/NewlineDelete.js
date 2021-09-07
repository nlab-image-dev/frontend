import React from "react";

export default class NewlineDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };

    this.deleteMark = this.deleteMark.bind(this)
  }

  deleteMark(event){
    const tragetText = event.target.value;
    const deletedText = tragetText.replace(/([^\.])\r\n/, /$1 /);
    this.setState({text: deletedText})
  }

  render() {
    return (
      <div>
        <label>input paper row text</label><br/>
        <textarea
          placeholder="copy text"
          onChange={this.deleteMark}
        /><br/>
        <label>newline deleted text</label><br/>
        <div>{this.state.text}</div>
      </div>
    );
  }
}