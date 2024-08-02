import React, { Component } from "react";

export class ButtonClicked extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  clickHandler = () => {
    this.setState((prevCount) => {
      return {
        count: prevCount.count + 1,
      };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.clickHandler}>clicked {count} times</button>
      </div>
    );
  }
}

export default ButtonClicked;
