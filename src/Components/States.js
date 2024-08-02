import React, { Component } from "react";

class States extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  changeHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>count-{count}</p>
        <button onClick={this.changeHandler}>Increment</button>
      </div>
    );
  }
}

export default States;
