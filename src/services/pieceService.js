export const Pieces = [
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
  { id: 'pawn8', name: 'Pawn' }
]

export function addProps(board, pieces) {
  return pieces.forEach(piece => {
    board.map(object => {
      object.piece = `${piece}`
    })
  })
}
