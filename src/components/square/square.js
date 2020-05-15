import React from 'react';
import './square.css'

const Square = props => {
  
  return <div key={props.value} value={props.value} className='box'><Piece /></div>;
};

export default Square;
