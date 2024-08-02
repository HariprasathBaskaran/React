//1.CSS stylesheets
// 2.Inline Styling
// 3.css modules
// 4.css in JS Libaries

import React, { Component } from "react";
import "./StyleSheet.css";

export class StyleSheet extends Component {
  render() {
    let className = this.props.primary ? "primary" : "secondary";
    return (
      <div>
        <h3 className={`${className} font-xl`}>Stylesheet</h3>
      </div>
    );
  }
}

export default StyleSheet;
