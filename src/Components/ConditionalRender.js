// if-else statement
// ternary conditional
// Element Variables
// short circuit operator

// #####if-else statement#####

// import { Component } from "react";

// class ConditionalRender extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: false,
//     };
//   }
//   render() {
//     if (this.state.isLoggedIn) {
//       return <div>Welcome Hariprasath</div>;
//     } else {
//       return <div>Welcome Guest</div>;
//     }
//   }
// }

// export default ConditionalRender;

// // #####Ternary statement#####

// import { Component } from "react";

// class ConditionalRender extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: false,
//     };
//   }
//   render() {
//     return this.state.isLoggedIn ? (
//       <div>Hello hariprasath</div>
//     ) : (
//       <div>Hello guest</div>
//     );
//   }
// }

// export default ConditionalRender;

// #####Element Variables#####

import { Component } from "react";

class ConditionalRender extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = "hello Lishan";
    } else {
      message = "welcome guest";
    }

    return <h4>{message}</h4>;
  }
}

export default ConditionalRender;
