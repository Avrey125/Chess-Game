import React from 'react';
import HLines from './horizontalLines';
import VertLines from './verticalLines';
import Pieces from './basicPieces';


const Canvas = ({onClick}) => {

  const styleSheet = {
    border: '1px solid black',
    height: '600px',
    width: '600px',
    backgroundColor:'#eeeed2',
  };

  return (
    <div>
      <button onClick={onClick}>Start Game</button>
      <svg
      id="chess-canvas"
      // preserveAspectRatio="xMaxYMax none"
      style={styleSheet}
      >

        <HLines />
        <VertLines />
        <Pieces />
      </svg>
    </div>

    
  );
};

export default Canvas
