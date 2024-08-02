import React from "react";

function ComponentB({ changeHandler }) {
  return (
    <div>
      <button onClick={changeHandler}>Increment</button>
    </div>
  );
}

export default ComponentB;
