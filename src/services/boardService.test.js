import {makeBoard, FILES, RANKS, BOARD} from './boardService';
const randomFiles = FILES[Math.floor(Math.random() * FILES.length)];
const randomRanks = RANKS[Math.floor(Math.random() * RANKS.length)];
const randomFileRank = `${randomRanks}${randomFiles}`;
const boardData = [{ 'coordinate': 'A1', 'piece': null }, { 'coordinate': 'B1', 'piece': null }, { 'coordinate': 'C1', 'piece': null }, { 'coordinate': 'D1', 'piece': null }, { 'coordinate': 'E1', 'piece': null }, { 'coordinate': 'F1', 'piece': null }, { 'coordinate': 'G1', 'piece': null }, { 'coordinate': 'H1', 'piece': null }, { 'coordinate': 'A2', 'piece': null }, { 'coordinate': 'B2', 'piece': null }, { 'coordinate': 'C2', 'piece': null }, { 'coordinate': 'D2', 'piece': null }, { 'coordinate': 'E2', 'piece': null }, { 'coordinate': 'F2', 'piece': null }, { 'coordinate': 'G2', 'piece': null }, { 'coordinate': 'H2', 'piece': null }, { 'coordinate': 'A3', 'piece': null }, { 'coordinate': 'B3', 'piece': null }, { 'coordinate': 'C3', 'piece': null }, { 'coordinate': 'D3', 'piece': null }, { 'coordinate': 'E3', 'piece': null }, { 'coordinate': 'F3', 'piece': null }, { 'coordinate': 'G3', 'piece': null }, { 'coordinate': 'H3', 'piece': null }, { 'coordinate': 'A4', 'piece': null }, { 'coordinate': 'B4', 'piece': null }, { 'coordinate': 'C4', 'piece': null }, { 'coordinate': 'D4', 'piece': null }, { 'coordinate': 'E4', 'piece': null }, { 'coordinate': 'F4', 'piece': null }, { 'coordinate': 'G4', 'piece': null }, { 'coordinate': 'H4', 'piece': null }, { 'coordinate': 'A5', 'piece': null }, { 'coordinate': 'B5', 'piece': null }, { 'coordinate': 'C5', 'piece': null }, { 'coordinate': 'D5', 'piece': null }, { 'coordinate': 'E5', 'piece': null }, { 'coordinate': 'F5', 'piece': null }, { 'coordinate': 'G5', 'piece': null }, { 'coordinate': 'H5', 'piece': null }, { 'coordinate': 'A6', 'piece': null }, { 'coordinate': 'B6', 'piece': null }, { 'coordinate': 'C6', 'piece': null }, { 'coordinate': 'D6', 'piece': null }, { 'coordinate': 'E6', 'piece': null }, { 'coordinate': 'F6', 'piece': null }, { 'coordinate': 'G6', 'piece': null }, { 'coordinate': 'H6', 'piece': null }, { 'coordinate': 'A7', 'piece': null }, { 'coordinate': 'B7', 'piece': null }, { 'coordinate': 'C7', 'piece': null }, { 'coordinate': 'D7', 'piece': null }, { 'coordinate': 'E7', 'piece': null }, { 'coordinate': 'F7', 'piece': null }, { 'coordinate': 'G7', 'piece': null }, { 'coordinate': 'H7', 'piece': null }, { 'coordinate': 'A8', 'piece': null }, { 'coordinate': 'B8', 'piece': null }, { 'coordinate': 'C8', 'piece': null }, { 'coordinate': 'D8', 'piece': null }, { 'coordinate': 'E8', 'piece': null }, { 'coordinate': 'F8', 'piece': null }, { 'coordinate': 'G8', 'piece': null }, { 'coordinate': 'H8', 'piece': null }];


describe('testing boardService', () => {
  // testing to make sure the array is populated with 64 object values
  test('Board contains 64 square objects', () => {
    let boardResult = BOARD;
    expect(boardResult).toHaveLength(64);
    expect(JSON.stringify(boardResult)).toBe(JSON.stringify(boardData));
  });

  // testing to make sure the objects have the required grid properties
  test('Function will have objects with chessBoard grid property values ', () => {
    expect(makeBoard(FILES,RANKS)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          coordinate: randomFileRank,
          piece: null,
        },
        ),
      ]),
    );
  });

  test('Function will have objects with chessBoard grid property values ', () => {
    expect(makeBoard(FILES,RANKS)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          coordinate: randomFileRank,
          piece: null,
        }),
      ]),
    );
  });
});
