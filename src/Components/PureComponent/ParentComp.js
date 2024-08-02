import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import Memo from "../Memo";

export class ParentComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "hariprasath",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "hariprasath",
      });
    }, 2000);
  }
  render() {
    console.log("Parent component");
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <Memo name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
