const board = require('./boardService');
const boardData = require('../data');
const randomFiles = boardData.FILES[Math.floor(Math.random() * boardData.FILES.length)];
const randomRanks = boardData.RANKS[Math.floor(Math.random() * boardData.RANKS.length)];
const randomFileRank = `${randomRanks}${randomFiles}`;

describe('board.js', () => {
  // testing to make sure the array is populated with 64 object values
  test('Function will create an array of square objects', () => {
    expect (board.makeBoard(boardData.FILES, boardData.RANKS)).toHaveLength(64);
  });

  // testing to make sure thhe objects have the required grid properties
  test('Function will have objects with chessboard grid property values ', () => {
    expect(board.makeBoard(boardData.FILES, boardData.RANKS)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          coordinate: randomFileRank,
          piece: null,
        },
        ),
      ]),
    );
  });

  test('Function will have objects with chessboard grid property values ', () => {
    expect(board.makeBoard(boardData.FILES, boardData.RANKS)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          coordinate: randomFileRank,
          piece: null,
        }),
      ]),
    );
  });
});

console.log(board);