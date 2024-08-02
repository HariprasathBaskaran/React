import React, { Component } from "react";

export class RefsDemo extends Component {
  constructor() {
    super();
    // this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (Element) => {
      this.cbRef = Element;
    };
  }

  componentDidMount() {
    console.log(this.cbRef);
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }
  render() {
    return (
      <div>
        <input ref={this.setCbRef} />
      </div>
    );
  }
}

export default RefsDemo;
