export function makeBoard(ranks, files) {
  return ranks.reduce((board, rank) => {
    files.forEach(file => {
      const id = `${file}${rank}`
      if (id.includes('1') || id.includes('2')) {
        board.push({
          id: id,
          piece: null,
          color: 'white',
          position: id,
          occupied: true
        })
      } else if (id.includes('7') || id.includes('8')) {
        board.push({
          id: id,
          piece: null,
          color: 'black',
          position: id,
          occupied: true
        })
      } else {
        board.push({
          id: id,
          piece: null,
          color: null,
          position: id,
          occupied: false
        })
      }
    })
    return board
  }, [])
}

export function newBoard(board, pieces) {
  board.forEach((square, index) => {
    const result = pieces.filter(piece => piece.position === square.id)
    console.log(result[0].piece)
    if (result) {
      square.piece = result[0]
    }
  })
}

// export function newBoard(board, topPieces, bottomPieces) {

//   board.forEach((square) => {
//     const piece =
//   })

//   for (let i = 0; i < 16; i++) {
//     Object.assign(board[i], topPieces[i])
//     topPieces[i].position = board[i].id
//   }
//   for (let i = 16; i < 48; i++) {
//     newBoard.push(board[i])
//   }
//   for (let i = 48; i < 64; i++) {
//     Object.assign(board[i], bottomPieces[i - 48])
//   }
// }

export const TOPPIECES = [
  { piece: '♖', name: 'Rook', position: 'A1', color: 'White' },
  { piece: '♘', name: 'Knight', position: 'B1' },
  { piece: '♗	', name: 'Bishop', position: 'C1' },
  { piece: '♔', name: 'King', position: 'D1', color: 'White' },
  { piece: '♕', name: 'Queen', position: 'E1', color: 'White' },
  { piece: '♗	', name: 'Bishop', position: 'F1', color: 'White' },
  { piece: '♘', name: 'Knight', position: 'G1', color: 'White' },
  { piece: '♖', name: 'Rook', position: 'H1', color: 'White' },
  { piece: '♙', name: 'Pawn', position: 'A2', color: 'White' },
  { piece: '♙', name: 'Pawn', position: 'B2', color: 'White' },
  { piece: '♙', name: 'Pawn', position: 'C2', color: 'White' },
  { piece: '♙', name: 'Pawn', position: 'D2', color: 'White' },
  { piece: '♙', name: 'Pawn', position: 'E2', color: 'White' },
  { piece: '♙', name: 'Pawn', position: 'F2', color: 'White' },
  { piece: '♙', name: 'Pawn', position: 'G2', color: 'White' },
  { piece: '♙', name: 'Pawn', position: 'H2', color: 'White' },
  { piece: '♟︎', name: 'Pawn', position: 'A7', color: 'Black' },
  { piece: '♟︎', name: 'Pawn', position: 'B7', color: 'Black' },
  { piece: '♟︎', name: 'Pawn', position: 'C7', color: 'Black' },
  { piece: '♟︎', name: 'Pawn', position: 'D7', color: 'Black' },
  { piece: '♟︎', name: 'Pawn', position: 'E7', color: 'Black' },
  { piece: '♟︎', name: 'Pawn', position: 'F7', color: 'Black' },
  { piece: '♟︎', name: 'Pawn', position: 'G7', color: 'Black' },
  { piece: '♟︎', name: 'Pawn', position: 'H8', color: 'Black' },
  { piece: '♜', name: 'Rook', position: 'A8', color: 'Black' },
  { piece: '♞', name: 'Knight', position: 'B8', color: 'Black' },
  { piece: '♝', name: 'Bishop', position: 'C8', color: 'Black' },
  { piece: '♛', name: 'Queen', position: 'D8', color: 'Black' },
  { piece: '♚', name: 'King', position: 'E8', color: 'Black' },
  { piece: '♝', name: 'Bishop', position: 'F8', color: 'Black' },
  { piece: '♞', name: 'Knight', position: 'G8', color: 'Black' },
  { piece: '♜', name: 'Rook', position: 'H8', color: 'Black' }
]

export const FILES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
export const RANKS = [1, 2, 3, 4, 5, 6, 7, 8]
export const BOARD = makeBoard(RANKS, FILES)
export const NEWBOARD = newBoard(BOARD, TOPPIECES)

console.log(BOARD)
// console.log(NEWBOARD)
