import React, { Component } from "react";
import ComponentB from "./ComponentB";

class ComponentA extends Component {
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
        <p>Count-{count}</p>
        <ComponentB changeHandler={this.changeHandler} />
      </div>
    );
  }
}

export default ComponentA;
