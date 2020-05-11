import React from 'react';
import './board.css';
import Square from '../square/square';
const boardFunction = require('../../services/boardService');
const boardData = require('../../data');

const board = boardFunction.makeBoard(boardData.FILES,boardData.RANKS);

export default function Board() {
  return (
    <div className='wrapper'>
      <div className='top'>
        <div className='wrapper-inner'>
        {boardData.FILES.map(value => ( <div key={value} className='box-inner'>{value}</div> ))}
        </div>
      </div>
      {board.map(value => (
        <Square value={value.coordinate} />
      ))}
      <div className='bottom'>
        <div className='wrapper-inner'>
        {boardData.FILES.map(value => ( <div key={value} className='box-inner'>{value}</div> ))}
        </div>
      </div>
    </div>
  );
}
