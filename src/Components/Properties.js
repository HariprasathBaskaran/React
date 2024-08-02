import React from "react";

function Properties(props) {
  const { userName } = props;
  return (
    <div>
      <p>hello {userName}</p>
    </div>
  );
}

export default Properties;
