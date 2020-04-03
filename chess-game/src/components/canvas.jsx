import React from 'react';
import Background from './background';
import Lines from './horizontalLines';
import VertLines from './verticalLines';
import TopPieces from './basicPieces';
import Squares from './square';

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
      preserveAspectRatio="xMaxYMax none"
      style={styleSheet}
      >
        <Background />
        <Lines />
        <VertLines />
        <TopPieces />
        {/* <BottomPieces /> */}
      </svg>
    </div>

    
  );
};

export default Canvas
