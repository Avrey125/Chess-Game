import { BOARD, FILES } from '../services/boardService'

let initialState = { BOARD, currentPlayer: 'White', FILES }

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
