import wRook from 'assets/RookW.png'
import bRook from 'assets/RookB.png'
import wPawn from 'assets/PawnW.png'
import bPawn from 'assets/PawnB.png'
import wKing from 'assets/KingW.png'
import bKing from 'assets/KingB.png'
import wQueen from 'assets/QueenW.png'
import bQueen from 'assets/QueenB.png'
import wBishop from 'assets/BishopW.png'
import bBishop from 'assets/BishopB.png'
import wKnight from 'assets/KnightW.png'
import bKnight from 'assets/KnightB.png'

export function makeBoard(ranks, files) {
  return ranks.reduce((board, rank) => {
    files.forEach(file => {
      const id = `${file}${rank}`
      if (id.includes('1') || id.includes('2')) {
        board.push({
          id: id,
          piece: null,
          position: id,
          occupied: true,
          selected: false
        })
      } else if (id.includes('7') || id.includes('8')) {
        board.push({
          id: id,
          piece: null,
          position: id,
          occupied: true,
          selected: false
        })
      } else {
        board.push({
          id: id,
          piece: null,
          position: id,
          occupied: false,
          selected: false
        })
      }
    })
    return board
  }, [])
}

export function newBoard(board, pieces) {
  board.forEach((square, index) => {
    const result = pieces.find(piece => piece.position === square.id)
    if (result) {
      square.piece = result.name
      square.color = result.color
      square.src = result.src
    }
  })
}

export const PIECES = [
  {
    name: 'Rook',
    position: 'A1',
    color: 'White',
    src: wRook
  },
  {
    name: 'Knight',
    position: 'B1',
    color: 'White',
    src: wKnight
  },
  {
    name: 'Bishop',
    position: 'C1',
    color: 'White',
    src: wBishop
  },
  {
    name: 'King',
    position: 'D1',
    color: 'White',
    src: wKing
  },
  {
    name: 'Queen',
    position: 'E1',
    color: 'White',
    src: wQueen
  },
  {
    name: 'Bishop',
    position: 'F1',
    color: 'White',
    src: wBishop
  },
  {
    name: 'Knight',
    position: 'G1',
    color: 'White',
    src: wKnight
  },
  {
    name: 'Rook',
    position: 'H1',
    color: 'White',
    src: wRook
  },
  {
    name: 'Pawn',
    position: 'A2',
    color: 'White',
    src: wPawn
  },
  {
    name: 'Pawn',
    position: 'B2',
    color: 'White',
    src: wPawn
  },
  {
    name: 'Pawn',
    position: 'C2',
    color: 'White',
    src: wPawn
  },
  {
    name: 'Pawn',
    position: 'D2',
    color: 'White',
    src: wPawn
  },
  {
    name: 'Pawn',
    position: 'E2',
    color: 'White',
    src: wPawn
  },
  {
    name: 'Pawn',
    position: 'F2',
    color: 'White',
    src: wPawn
  },
  {
    name: 'Pawn',
    position: 'G2',
    color: 'White',
    src: wPawn
  },
  {
    name: 'Pawn',
    position: 'H2',
    color: 'White',
    src: wPawn
  },
  {
    name: 'Pawn',
    position: 'A7',
    color: 'Black',
    src: bPawn
  },
  {
    name: 'Pawn',
    position: 'B7',
    color: 'Black',
    src: bPawn
  },
  {
    name: 'Pawn',
    position: 'C7',
    color: 'Black',
    src: bPawn
  },
  {
    name: 'Pawn',
    position: 'D7',
    color: 'Black',
    src: bPawn
  },
  {
    name: 'Pawn',
    position: 'E7',
    color: 'Black',
    src: bPawn
  },
  {
    name: 'Pawn',
    position: 'F7',
    color: 'Black',
    src: bPawn
  },
  {
    name: 'Pawn',
    position: 'G7',
    color: 'Black',
    src: bPawn
  },
  {
    name: 'Pawn',
    position: 'H7',
    color: 'Black',
    src: bPawn
  },
  {
    name: 'Rook',
    position: 'A8',
    color: 'Black',
    src: bRook
  },
  {
    name: 'Knight',
    position: 'B8',
    color: 'Black',
    src: bKnight
  },
  {
    name: 'Bishop',
    position: 'C8',
    color: 'Black',
    src: bBishop
  },
  {
    name: 'Queen',
    position: 'D8',
    color: 'Black',
    src: bQueen
  },
  {
    name: 'King',
    position: 'E8',
    color: 'Black',
    src: bKing
  },
  {
    name: 'Bishop',
    position: 'F8',
    color: 'Black',
    src: bBishop
  },
  {
    name: 'Knight',
    position: 'G8',
    color: 'Black',
    src: bKnight
  },
  {
    name: 'Rook',
    position: 'H8',
    color: 'Black',
    src: bRook
  }
]

export const FILES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
export const RANKS = [1, 2, 3, 4, 5, 6, 7, 8]
export const BOARD = makeBoard(RANKS, FILES)
export const NEWBOARD = newBoard(BOARD, PIECES)

// console.log(BOARD)
// console.log(NEWBOARD)
