import React, { useState } from 'react'
import './piece.css'

const Piece = props => {
  const [state, setState] = useState({
    name: '',
    id: '',
    placement: props.id,
    color: props.color,
    clicked: false,
    piece: props.piece
  })

  return (
    <div
      id={state.id}
      placement={state.placement}
      className="piece"
      color={state.color}
      piece={state.piece}
      onClick={() => {
        setState(state.clicked === !state.clicked)
        console.log(state.clicked)
      }}
    >
      <img className="pieceImage" src={props.src} />
    </div>
  )
}

export default Piece
