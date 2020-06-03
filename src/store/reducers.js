import { BOARD } from '../services/boardService'

let initialState = { BOARD, currentPlayer: 'White' }

export default (state = initialState, action) => {
  let { type, payload } = action

  return state
}
