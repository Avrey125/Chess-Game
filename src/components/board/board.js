import React from 'react'
import './board.css'
import Square from '../square/square'
import { useSelector, useDispatch } from 'react-redux'

export default function Board() {
  const player = useSelector(state => state.currentPlayer)
  const board = useSelector(state => state.BOARD)
  const files = useSelector(state => state.FILES)
  const dispatch = useDispatch()
  function handleReset(e) {
    e.preventDefault()
    console.log('clicked')
    console.log(board)
  }

  return (
    <div className="wholeThang">
      <div className="player" onClick={() => dispatch({ type: 'TOGGLEBLACK' })}>
        Player:{player}
      </div>
      <div className="wrapper">
        <div className="top">
          <div className="wrapper-inner">
            {files.map(value => (
              <div key={value} className="box-inner">
                {value}
              </div>
            ))}
          </div>
        </div>
        {board.map(value => (
          <Square
            piece={value.piece}
            key={value.id}
            color={value.color}
            id={value.id}
            occupied={value.occupied}
            src={value.src}
          />
        ))}
        <div className="bottom">
          <div className="wrapper-inner">
            {files.map(value => (
              <div key={value} className="box-inner">
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={handleReset}>Restart Game</button>
    </div>
  )
}
