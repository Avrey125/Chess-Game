import React from 'react';
import Lines from '../layout/verticalLines';
import Pieces from '../piece/basicPieces';


const Board = ({onClick}) => {

  const styleSheet = {
    border: '1px solid black',
    height: '600px',
    width: '600px',
    backgroundColor:'#eeeed2',
  };

  return (
    <div>
      <svg
      id="chess-canvas"
      style={styleSheet}
      >
        <Lines />
        <Pieces />
      </svg>
    </div>
  );
};

export default Board;
