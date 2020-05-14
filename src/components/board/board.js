import React from 'react';
import './board.css';
import Square from '../square/square';
import {BOARD, FILES} from '../../services/boardService';

export default function Board() {

  return (
    <div className='wrapper'>
      <div className='top'>
        <div className='wrapper-inner'>
        {FILES.map(value => ( <div key={value} className='box-inner'>{value}</div> ))}
        </div>
      </div>
      {BOARD.map(value => (
        <Square key ={value.id} value={value.id} />
      ))}
      <div className='bottom'>
        <div className='wrapper-inner'>
        {FILES.map(value => ( <div key={value} className='box-inner'>{value}</div> ))}
        </div>
      </div>
    </div>
  );
}
