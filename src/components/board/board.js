import React from 'react';
import './board.css';
import Square from '../square/square';
const makeBoard = require('../../services/boardService');

const FILES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const RANKS = [1, 2, 3, 4, 5, 6, 7, 8];

const board =  makeBoard(FILES,RANKS);

export default function Board() {
  return (
    <div className='wrapper'>
      <div className='top'>
        <div className='wrapper-inner'>
        {RANKS.map(value => ( <div key={value} className='box-inner'>{value}</div> ))}
        </div>
      </div>
      {board.map(value => (
        <Square value={value.coordinate} />
      ))}
      <div className='bottom'>
        <div className='wrapper-inner'>
        {RANKS.map(value => ( <div key={value} className='box-inner'>{value}</div> ))}
        </div>
      </div>
    </div>
  );
}
