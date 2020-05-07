import React from "react";
import "./piece.css";

const Piece = props => {
  return <div className="piece">{props.value}</div>;
};

export default Piece;
