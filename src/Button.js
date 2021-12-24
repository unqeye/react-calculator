import React from "react";

function Button(props) {
  return (
    <button
      style={{ fontSize: "20px" }}
      onClick={() => props.onClick(props.val)}
    >
      {props.val}
    </button>
  );
}

export default Button;
