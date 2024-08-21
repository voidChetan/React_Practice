import React, { Component } from "react";

class TestClassComp extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("Button clicked");
  }
  printMessage = () => {
    console.log("Button clicked");
  };
  printMyMessage = (msg) => {
    console.log(msg);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Click me </button>
        <button onClick={this.printMessage}> Click me </button>
        <button onClick={() => { this.printMyMessage("Hii From Button")}}> Click me </button>
      </div>
    );
  }
}

export default TestClassComp;
