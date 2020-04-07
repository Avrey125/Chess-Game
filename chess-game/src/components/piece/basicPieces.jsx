import React from 'react';
import Piece from './piece';


const Pieces = () => {

  const items = [];
  const array = [1,2,3,4,5,6,7,8]

  
  const width = 600;
  const spaceWidth = 75;

    array.forEach((value, index) => {
      let x = index * width/array.length + spaceWidth/2;
      items.push(      

      <g>
        <Piece key={index} xCoordinate={x} yCoordinate={spaceWidth/2} fill="white"/>
        <Piece key={index + 8} xCoordinate={x} yCoordinate={spaceWidth * 1.5} fill="white"/>
        <Piece key={index + 16} xCoordinate={x} yCoordinate={spaceWidth * 6.5} fill="black"/>
        <Piece key={index + 24} xCoordinate={x} yCoordinate={spaceWidth * 7.5} fill="black"/>
      </g>
      )
      }
    )

  return (
    <g id="topPieces">
      {items}
    </g>
  );
};

export default Pieces;