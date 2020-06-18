import React, { useState } from 'react'
import './piece.css'

const Piece = props => {
  const [state, setState] = useState({
    name: '',
    id: '',
    placement: props.id,
    color: props.color,
    clicked: false
  })
  const occupied = JSON.stringify(props.occupied)
  const toggleClick = () => {
    // setState((state.clicked = !state.clicked))
    // console.log(state.clicked)
    console.log(props.id, occupied)
  }

  return (
    <div
      id={state.id}
      placement={state.placement}
      className="piece"
      color={state.color}
      onClick={() => toggleClick()}
      occupied={occupied}
      piece={props.piece}
    >
      {props.piece}
    </div>
  )
}

export default Piece
