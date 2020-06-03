import React, { useState } from 'react'
import './piece.css'

const Piece = props => {
  const [state, setstate] = useState({
    name: '',
    id: '',
    placement: props.id,
    color: props.color
  })

  return (
    <div
      style={
        state.color === 'black'
          ? { backgroundColor: 'black' }
          : { backgroundColor: 'white' }
      }
      id={state.id}
      placement={state.placement}
      className="piece"
      color={state.color}
    >
      {state.placement}
    </div>
  )
}

export default Piece
