import { BOARD } from '../services/boardService'

let initialState = { BOARD, currentPlayer: 'White' }

export default (state = initialState, action) => {
  let { type, payload } = action

  switch (type) {
    case 'TOGGLEBLACK':
      return { currentPlayer: 'Black' }
    case 'TOGGLEWHITE':
      return { currentPlayer: 'White' }
    default:
      return state
  }
}
