import { BOARD, FILES } from '../services/boardService'
import { TOGGLEBLACK, SELECT, MOVEMENT } from './actiontypes'
import PIECE from '../components/piece/piece'

let initialState = {
  BOARD,
  currentPlayer: 'White',
  FILES,
  selectdPiece: null,
  PIECE
}

export default (state = initialState, action) => {
  let { type, payload } = action

  switch (action.type) {
    case TOGGLEBLACK: {
      const nextColor = state.currentPlayer === 'White' ? 'Black' : 'White'
      return { ...state, currentPlayer: nextColor }
    }
    case SELECT:
      // console.log(action.payload.props.id, type)
      state.BOARD.filter(pieceProps => {
        if (pieceProps.id === action.payload.props.id) {
          pieceProps.selected = !pieceProps.selected
          console.log(pieceProps)
          console.log(BOARD)
        }
        return pieceProps
      })
      return {
        ...state,
        BOARD
      }
    // case MOVEMENT:
    //   state.BOARD.filter(pieceProps => {
    //     if (pieceProps.id !== action.payload.props.id) {
    //       pieceProps.position === moveablePiece.position
    //     }
    //   })
    // return { ...state, BOARD }
    default:
      return state
  }
}
