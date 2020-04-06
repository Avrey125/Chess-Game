import React, {useState} from 'react';

const Piece = (props) => {

  function onclick() {
    return console.log("this has been clicked")
  }

  return (
    <g>
      <circle
        data-testid="circle"
        key={props.id}
        cx={props.xCoordinate}
        cy={props.yCoordinate}
        r="20"
        fill={props.fill}
        id={props.id}
        onClick={onclick()}
      />
    </g>

  )
}
  

export default Piece