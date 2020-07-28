import React, { useState } from 'react'
import './piece.css'
import { useSelector, useDispatch } from 'react-redux'

const Piece = props => {
  const board = useSelector(state => state.BOARD)
  const piece = useSelector(state => state.PIECE)
  const dispatch = useDispatch()
  const [properties, setProperties] = useState({
    name: '',
    id: '',
    placement: props.id,
    color: props.color,
    clicked: false,
    piece: props.piece,
    src: props.src,
    selected: props.selected
  })

  return (
    <div
      id={properties.id}
      placement={properties.placement}
      className={'piece'}
      color={properties.color}
      piece={properties.piece}
      onClick={() => dispatch({ type: 'SELECT', payload: { props } })}
      selected={properties.selected}
      // onClick={() => console.log(props)}
    >
      <img className="pieceImage" src={properties.src} />
    </div>
  )
}

export default Piece
