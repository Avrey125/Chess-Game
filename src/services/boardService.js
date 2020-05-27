export function makeBoard(ranks, files, pieces) {
  return ranks.reduce((board, rank) => {
    files.forEach(file => {
      const id = `${file}${rank}`
      if (id.includes('1') || id.includes('2')) {
        board.push({ id: id, piece: null, color: 'white' })
      } else if (id.includes('7') || id.includes('8')) {
        board.push({ id: id, piece: null, color: 'black' })
      } else {
        board.push({ id: id, piece: null, color: null })
      }
    })
    return board
  }, [])
}

export const PIECES = [
  { id: 'rook1', name: 'Rook' },
  { id: 'knight1', name: 'Knight' },
  { id: 'bishop1', name: 'Bishop' },
  { id: 'king', name: 'King' },
  { id: 'queen', name: 'Queen' },
  { id: 'bishop2', name: 'Bishop' },
  { id: 'knight2', name: 'Knight' },
  { id: 'rook2', name: 'Rook' },
  { id: 'pawn1', name: 'Pawn' },
  { id: 'pawn2', name: 'Pawn' },
  { id: 'pawn3', name: 'Pawn' },
  { id: 'pawn4', name: 'Pawn' },
  { id: 'pawn5', name: 'Pawn' },
  { id: 'pawn6', name: 'Pawn' },
  { id: 'pawn7', name: 'Pawn' },
  { id: 'pawn8', name: 'Pawn' },
]

export const FILES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
export const RANKS = [1, 2, 3, 4, 5, 6, 7, 8]
export const BOARD = makeBoard(RANKS, FILES, PIECES)
