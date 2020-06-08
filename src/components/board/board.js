import React from 'react'
import './board.css'
import Square from '../square/square'
import { FILES } from '../../services/boardService'
import { useSelector, useDispatch } from 'react-redux'

export default function Board() {
  function handleReset(e) {
    e.preventDefault()
    console.log('clicked')
  }
  const player = useSelector(state => state.currentPlayer)
  const board = useSelector(state => state.BOARD)
  const dispatch = useDispatch()
  return (
    <div className="wholeThang">
      <div className="player" onClick={() => dispatch({ type: 'TOGGLEBLACK' })}>
        Player:{player}
      </div>
      <div className="wrapper">
        <div className="top">
          <div className="wrapper-inner">
            {FILES.map(value => (
              <div key={value} className="box-inner">
                {value}
              </div>
            ))}
          </div>
        </div>
        {board.map(value => (
          <Square key={value.id} color={value.color} id={value.id} />
        ))}
        <div className="bottom">
          <div className="wrapper-inner">
            {FILES.map(value => (
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
