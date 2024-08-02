import React, { Component } from "react";

class Hovered extends Component {
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
        <h3 onMouseOver={this.clickHandler}>Hovered {count} times</h3>
      </div>
    );
  }
}

export default Hovered;
