import React from 'react';
import './square.css'

const Square = props => {
  
  return <div className='box'>{props.value}</div>;
};

export default Square;
