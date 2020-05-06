import React from "react";
import "../../styles/styles.css";

// Square component with the props of id inorder to display the grid coordinates (and later the piece) in each square
const Square = props => {
  return <div className="box">{props.id}</div>;
};

export default Square;
