import React from "react";
import "../../styles/styles.css";
import Piece from '../piece/piece';

const Square = props => {
  return <div className="box"><Piece value={props.value}/></div>;
};

export default Square;
