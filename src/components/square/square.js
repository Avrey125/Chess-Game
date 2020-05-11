import React from "react";
import "./square.css";
import Piece from '../piece/piece';

const Square = props => {
  return <div className="box"><Piece value={props.value}/></div>;
};

export default Square;
