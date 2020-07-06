import React from 'react'
import './square.css'
import Piece from '../piece/piece'

const Square = props => {
  const occupied = props.occupied

  return (
    <div className="box" id={props.id} onClick={() => console.log(props)}>
      {props.piece && (
        <Piece
          id={props.id}
          color={props.color}
          occupied={occupied}
          piece={props.piece}
          src={props.src}
        />
      )}
    </div>
  )
}

export default Square
