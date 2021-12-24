import React from "react";

function Expression(props) {
  return (
    <>
      {props.current}
      {props.token}
    </>
  );
}

export default Expression;
