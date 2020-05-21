import React from 'react';
import './square.css'
import Piece from '../piece/piece';

const Square = props => {

    const color = props.color

    return (
        <div className='box' id={props.id}>
        {color !== null &&
          <Piece id={props.id} color={props.color}/>
        }
        </div>
    )


};

export default Square;
