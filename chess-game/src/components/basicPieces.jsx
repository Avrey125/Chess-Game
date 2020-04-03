import React from 'react';
import Squares from './square'

const Pieces = () => {

  const items = [];
  const array = [1,2,3,4,5,6,7,8]
  const width = 600;
  const spaceWidth = 75;

    array.forEach((value, index) => {
      items.push(      

      <>
        <circle cx={index * width/array.length + spaceWidth/2} cy={spaceWidth/2} r="20"/>
        <circle cx={index * width/array.length + spaceWidth/2} cy={spaceWidth * 1.5} r="20"/>
      </>
      )
      }
    )

  return (
    <g id="topPieces">
      {/* <circle cx={75/2} cy={75/2}r="20" /> */}
      {items}
    </g>
  );
};

export default Pieces;