import React, { Component } from "react";

export class RegComp extends Component {
  render() {
    console.log("REgular component");
    return <div>Regular component {this.props.name}</div>;
  }
}

export default RegComp;
