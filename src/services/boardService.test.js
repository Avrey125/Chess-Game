import { makeBoard, FILES, RANKS, BOARD } from './boardService'
const randomFiles = FILES[Math.floor(Math.random() * FILES.length)]
const randomRanks = RANKS[Math.floor(Math.random() * RANKS.length)]
const randomFileRank = `${randomRanks}${randomFiles}`
const boardData = [
  { id: 'A1', piece: null },
  { id: 'B1', piece: null },
  { id: 'C1', piece: null },
  { id: 'D1', piece: null },
  { id: 'E1', piece: null },
  { id: 'F1', piece: null },
  { id: 'G1', piece: null },
  { id: 'H1', piece: null },
  { id: 'A2', piece: null },
  { id: 'B2', piece: null },
  { id: 'C2', piece: null },
  { id: 'D2', piece: null },
  { id: 'E2', piece: null },
  { id: 'F2', piece: null },
  { id: 'G2', piece: null },
  { id: 'H2', piece: null },
  { id: 'A3', piece: null },
  { id: 'B3', piece: null },
  { id: 'C3', piece: null },
  { id: 'D3', piece: null },
  { id: 'E3', piece: null },
  { id: 'F3', piece: null },
  { id: 'G3', piece: null },
  { id: 'H3', piece: null },
  { id: 'A4', piece: null },
  { id: 'B4', piece: null },
  { id: 'C4', piece: null },
  { id: 'D4', piece: null },
  { id: 'E4', piece: null },
  { id: 'F4', piece: null },
  { id: 'G4', piece: null },
  { id: 'H4', piece: null },
  { id: 'A5', piece: null },
  { id: 'B5', piece: null },
  { id: 'C5', piece: null },
  { id: 'D5', piece: null },
  { id: 'E5', piece: null },
  { id: 'F5', piece: null },
  { id: 'G5', piece: null },
  { id: 'H5', piece: null },
  { id: 'A6', piece: null },
  { id: 'B6', piece: null },
  { id: 'C6', piece: null },
  { id: 'D6', piece: null },
  { id: 'E6', piece: null },
  { id: 'F6', piece: null },
  { id: 'G6', piece: null },
  { id: 'H6', piece: null },
  { id: 'A7', piece: null },
  { id: 'B7', piece: null },
  { id: 'C7', piece: null },
  { id: 'D7', piece: null },
  { id: 'E7', piece: null },
  { id: 'F7', piece: null },
  { id: 'G7', piece: null },
  { id: 'H7', piece: null },
  { id: 'A8', piece: null },
  { id: 'B8', piece: null },
  { id: 'C8', piece: null },
  { id: 'D8', piece: null },
  { id: 'E8', piece: null },
  { id: 'F8', piece: null },
  { id: 'G8', piece: null },
  { id: 'H8', piece: null }
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
          piece: null
        })
      ])
    )
  })

  test('Function will have objects with chessBoard grid property values ', () => {
    expect(makeBoard(FILES, RANKS)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: randomFileRank,
          piece: null
        })
      ])
    )
  })
})
