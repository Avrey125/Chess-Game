import { makeBoard, FILES, RANKS, BOARD } from './boardService'
const randomFiles = FILES[Math.floor(Math.random() * FILES.length)]
const randomRanks = RANKS[Math.floor(Math.random() * RANKS.length)]
const randomFileRank = `${randomRanks}${randomFiles}`
const boardData = [
  { id: 'A1', piece: null, color: 'white' },
  { id: 'B1', piece: null, color: 'white' },
  { id: 'C1', piece: null, color: 'white' },
  { id: 'D1', piece: null, color: 'white' },
  { id: 'E1', piece: null, color: 'white' },
  { id: 'F1', piece: null, color: 'white' },
  { id: 'G1', piece: null, color: 'white' },
  { id: 'H1', piece: null, color: 'white' },
  { id: 'A2', piece: null, color: 'white' },
  { id: 'B2', piece: null, color: 'white' },
  { id: 'C2', piece: null, color: 'white' },
  { id: 'D2', piece: null, color: 'white' },
  { id: 'E2', piece: null, color: 'white' },
  { id: 'F2', piece: null, color: 'white' },
  { id: 'G2', piece: null, color: 'white' },
  { id: 'H2', piece: null, color: 'white' },
  { id: 'A3', piece: null, color: null },
  { id: 'B3', piece: null, color: null },
  { id: 'C3', piece: null, color: null },
  { id: 'D3', piece: null, color: null },
  { id: 'E3', piece: null, color: null },
  { id: 'F3', piece: null, color: null },
  { id: 'G3', piece: null, color: null },
  { id: 'H3', piece: null, color: null },
  { id: 'A4', piece: null, color: null },
  { id: 'B4', piece: null, color: null },
  { id: 'C4', piece: null, color: null },
  { id: 'D4', piece: null, color: null },
  { id: 'E4', piece: null, color: null },
  { id: 'F4', piece: null, color: null },
  { id: 'G4', piece: null, color: null },
  { id: 'H4', piece: null, color: null },
  { id: 'A5', piece: null, color: null },
  { id: 'B5', piece: null, color: null },
  { id: 'C5', piece: null, color: null },
  { id: 'D5', piece: null, color: null },
  { id: 'E5', piece: null, color: null },
  { id: 'F5', piece: null, color: null },
  { id: 'G5', piece: null, color: null },
  { id: 'H5', piece: null, color: null },
  { id: 'A6', piece: null, color: null },
  { id: 'B6', piece: null, color: null },
  { id: 'C6', piece: null, color: null },
  { id: 'D6', piece: null, color: null },
  { id: 'E6', piece: null, color: null },
  { id: 'F6', piece: null, color: null },
  { id: 'G6', piece: null, color: null },
  { id: 'H6', piece: null, color: null },
  { id: 'A7', piece: null, color: 'black' },
  { id: 'B7', piece: null, color: 'black' },
  { id: 'C7', piece: null, color: 'black' },
  { id: 'D7', piece: null, color: 'black' },
  { id: 'E7', piece: null, color: 'black' },
  { id: 'F7', piece: null, color: 'black' },
  { id: 'G7', piece: null, color: 'black' },
  { id: 'H7', piece: null, color: 'black' },
  { id: 'A8', piece: null, color: 'black' },
  { id: 'B8', piece: null, color: 'black' },
  { id: 'C8', piece: null, color: 'black' },
  { id: 'D8', piece: null, color: 'black' },
  { id: 'E8', piece: null, color: 'black' },
  { id: 'F8', piece: null, color: 'black' },
  { id: 'G8', piece: null, color: 'black' },
  { id: 'H8', piece: null, color: 'black' },
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
          id: randomFileRank,
          piece: null,
        }),
      ])
    )
  })

  test('Function will have objects with chessBoard grid property values ', () => {
    expect(makeBoard(FILES, RANKS)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: randomFileRank,
          piece: null,
        }),
      ])
    )
  })
})
