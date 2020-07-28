import React from 'react'
import './square.css'
// import Piece from '../piece/piece'
import { useSelector, useDispatch } from 'react-redux'

const Square = props => {
  const occupied = props.occupied
  const Piece = useSelector(state => state.PIECE)
  const dispatch = useDispatch()
  return (
    <div
      className={`box${props.selected ? 'Selected' : ''}`}
      id={props.id}
      onClick={() => console.log(props)}
      selected={props.selected}
    >
      {props.piece && (
        <Piece
          id={props.id}
          color={props.color}
          occupied={occupied}
          piece={props.piece}
          src={props.src}
          selected={props.selected}
        />
      )}
    </div>
  )
}

export default Square
