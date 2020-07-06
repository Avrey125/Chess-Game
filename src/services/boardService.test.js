import { makeBoard, newBoard, FILES, RANKS, BOARD } from './boardService'
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
const randomFiles = FILES[Math.floor(Math.random() * FILES.length)]
const randomRanks = RANKS[Math.floor(Math.random() * RANKS.length)]
const randomFileRank = `${randomRanks}${randomFiles}`
const boardData = [
  {
    id: 'A1',
    piece: 'Rook',
    position: 'A1',
    occupied: true,
    color: 'White',
    src: wRook
  },
  {
    id: 'B1',
    piece: 'Knight',
    position: 'B1',
    occupied: true,
    color: 'White',
    src: wKnight
  },
  {
    id: 'C1',
    piece: 'Bishop',
    position: 'C1',
    occupied: true,
    color: 'White',
    src: wBishop
  },
  {
    id: 'D1',
    piece: 'King',
    position: 'D1',
    occupied: true,
    color: 'White',
    src: wKing
  },
  {
    id: 'E1',
    piece: 'Queen',
    position: 'E1',
    occupied: true,
    color: 'White',
    src: wQueen
  },

  {
    id: 'F1',
    piece: 'Bishop',
    position: 'F1',
    occupied: true,
    color: 'White',
    src: wBishop
  },
  {
    id: 'G1',
    piece: 'Knight',
    position: 'G1',
    occupied: true,
    color: 'White',
    src: wKnight
  },
  {
    id: 'H1',
    piece: 'Rook',
    position: 'H1',
    occupied: true,
    color: 'White',
    src: wRook
  },
  {
    id: 'A2',
    piece: 'Pawn',
    position: 'A2',
    occupied: true,
    color: 'White',
    src: wPawn
  },
  {
    id: 'B2',
    piece: 'Pawn',
    position: 'B2',
    occupied: true,
    color: 'White',
    src: wPawn
  },
  {
    id: 'C2',
    piece: 'Pawn',
    position: 'C2',
    occupied: true,
    color: 'White',
    src: wPawn
  },
  {
    id: 'D2',
    piece: 'Pawn',
    position: 'D2',
    occupied: true,
    color: 'White',
    src: wPawn
  },
  {
    id: 'E2',
    piece: 'Pawn',
    position: 'E2',
    occupied: true,
    color: 'White',
    src: wPawn
  },
  {
    id: 'F2',
    piece: 'Pawn',
    position: 'F2',
    occupied: true,
    color: 'White',
    src: wPawn
  },
  {
    id: 'G2',
    piece: 'Pawn',
    position: 'G2',
    occupied: true,
    color: 'White',
    src: wPawn
  },
  {
    id: 'H2',
    piece: 'Pawn',
    position: 'H2',
    occupied: true,
    color: 'White',
    src: wPawn
  },
  { id: 'A3', piece: null, position: 'A3', occupied: false },
  { id: 'B3', piece: null, position: 'B3', occupied: false },
  { id: 'C3', piece: null, position: 'C3', occupied: false },
  { id: 'D3', piece: null, position: 'D3', occupied: false },
  { id: 'E3', piece: null, position: 'E3', occupied: false },
  { id: 'F3', piece: null, position: 'F3', occupied: false },
  { id: 'G3', piece: null, position: 'G3', occupied: false },
  { id: 'H3', piece: null, position: 'H3', occupied: false },
  { id: 'A4', piece: null, position: 'A4', occupied: false },
  { id: 'B4', piece: null, position: 'B4', occupied: false },
  { id: 'C4', piece: null, position: 'C4', occupied: false },
  { id: 'D4', piece: null, position: 'D4', occupied: false },
  { id: 'E4', piece: null, position: 'E4', occupied: false },
  { id: 'F4', piece: null, position: 'F4', occupied: false },
  { id: 'G4', piece: null, position: 'G4', occupied: false },
  { id: 'H4', piece: null, position: 'H4', occupied: false },
  { id: 'A5', piece: null, position: 'A5', occupied: false },
  { id: 'B5', piece: null, position: 'B5', occupied: false },
  { id: 'C5', piece: null, position: 'C5', occupied: false },
  { id: 'D5', piece: null, position: 'D5', occupied: false },
  { id: 'E5', piece: null, position: 'E5', occupied: false },
  { id: 'F5', piece: null, position: 'F5', occupied: false },
  { id: 'G5', piece: null, position: 'G5', occupied: false },
  { id: 'H5', piece: null, position: 'H5', occupied: false },
  { id: 'A6', piece: null, position: 'A6', occupied: false },
  { id: 'B6', piece: null, position: 'B6', occupied: false },
  { id: 'C6', piece: null, position: 'C6', occupied: false },
  { id: 'D6', piece: null, position: 'D6', occupied: false },
  { id: 'E6', piece: null, position: 'E6', occupied: false },
  { id: 'F6', piece: null, position: 'F6', occupied: false },
  { id: 'G6', piece: null, position: 'G6', occupied: false },
  { id: 'H6', piece: null, position: 'H6', occupied: false },
  {
    id: 'A7',
    piece: 'Pawn',
    position: 'A7',
    occupied: true,
    color: 'Black',
    src: bPawn
  },
  {
    id: 'B7',
    piece: 'Pawn',
    position: 'B7',
    occupied: true,
    color: 'Black',
    src: bPawn
  },
  {
    id: 'C7',
    piece: 'Pawn',
    position: 'C7',
    occupied: true,
    color: 'Black',
    src: bPawn
  },
  {
    id: 'D7',
    piece: 'Pawn',
    position: 'D7',
    occupied: true,
    color: 'Black',
    src: bPawn
  },
  {
    id: 'E7',
    piece: 'Pawn',
    position: 'E7',
    occupied: true,
    color: 'Black',
    src: bPawn
  },
  {
    id: 'F7',
    piece: 'Pawn',
    position: 'F7',
    occupied: true,
    color: 'Black',
    src: bPawn
  },
  {
    id: 'G7',
    piece: 'Pawn',
    position: 'G7',
    occupied: true,
    color: 'Black',
    src: bPawn
  },
  {
    id: 'H7',
    piece: 'Pawn',
    position: 'H7',
    occupied: true,
    color: 'Black',
    src: bPawn
  },
  {
    id: 'A8',
    piece: 'Rook',
    position: 'A8',
    occupied: true,
    color: 'Black',
    src: bRook
  },
  {
    id: 'B8',
    piece: 'Knight',
    position: 'B8',
    occupied: true,
    color: 'Black',
    src: bKnight
  },
  {
    id: 'C8',
    piece: 'Bishop',
    position: 'C8',
    occupied: true,
    color: 'Black',
    src: bBishop
  },
  {
    id: 'D8',
    piece: 'Queen',
    position: 'D8',
    occupied: true,
    color: 'Black',
    src: bQueen
  },
  {
    id: 'E8',
    piece: 'King',
    position: 'E8',
    occupied: true,
    color: 'Black',
    src: bKing
  },
  {
    id: 'F8',
    piece: 'Bishop',
    position: 'F8',
    occupied: true,
    color: 'Black',
    src: bBishop
  },
  {
    id: 'G8',
    piece: 'Knight',
    position: 'G8',
    occupied: true,
    color: 'Black',
    src: bKnight
  },
  {
    id: 'H8',
    piece: 'Rook',
    position: 'H8',
    occupied: true,
    color: 'Black',
    src: bRook
  }
]

describe('testing boardService', () => {
  // testing to make sure the array is populated with 64 object values
  test('Board contains 64 square objects', () => {
    let boardResult = BOARD
    expect(boardResult).toHaveLength(64)
    expect(JSON.stringify(boardResult)).toBe(JSON.stringify(boardData))
  })

  // testing to make sure the objects have the required grid properties
  test('Function will have objects with chessBoard grid property values ', () => {
    expect(makeBoard(FILES, RANKS)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: '1A',
          occupied: true,
          piece: null,
          position: '1A'
        })
      ])
    )
  })

  test('Function will have objects with chessBoard grid property values ', () => {
    expect(makeBoard(FILES, RANKS)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: '7A',
          occupied: true,
          piece: null,
          position: '7A'
        })
      ])
    )
  })
})
