import { BOARD, FILES } from '../services/boardService'
import Piece from '../components/piece/piece'

let initialState = { BOARD, currentPlayer: 'White', FILES, Piece }

export default (state = initialState, action) => {
  let { type, payload } = action

  switch (type) {
    case 'TOGGLEBLACK': {
      const nextColor = state.currentPlayer === 'White' ? 'Black' : 'White'
      return { ...state, currentPlayer: nextColor }
    }
    case 'MOVEMENT':
      return { ...state }
    default:
      return state
  }
}
