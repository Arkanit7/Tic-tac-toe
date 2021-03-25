import React from "react";

function Square(props) {
  return (
    <button onClick={() => props.setSquare()} className="square">
      {props.children}
    </button>
  );
}

export default Square;
