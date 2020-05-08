import React from 'react';
import './board.css';
import Square from '../square/square';

const FILES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const RANKS = [1, 2, 3, 4, 5, 6, 7, 8];

function makeBoard(ranks, files) {
  return ranks.reduce((board, rank) => {
    files.forEach(file => {
      const coordinate = `${file}${rank}`;
      board.push({ coordinate: coordinate, piece: null});
    });
    return board;
  }, []);
}

const board = makeBoard(RANKS, FILES);

export default function Board() {
  
  return (
    <div className='wrapper'>
      <div className='top'>
        <div className='wrapper-inner'>
        {FILES.map(value => ( <div key={value} className='box-inner'>{value}</div> ))}
        </div>
      </div>
      {board.map(value => (
        <Square value={value.coordinate} />
      ))}
      <div className='bottom'>
        <div className='wrapper-inner'>
        {FILES.map(value => ( <div key={value} className='box-inner'>{value}</div> ))}
        </div>
      </div>
    </div>
  );
}
