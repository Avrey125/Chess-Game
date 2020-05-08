const board = require('../../services/boardService');

const FILES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const RANKS = [1, 2, 3, 4, 5, 6, 7, 8];

describe('board.js', () => {
  // testing to make sure the array is populated with 64 object values
  test('Function will create an array of square objects', () => {
    expect (board(FILES, RANKS)).toHaveLength(64);
  });

  // testing to make sure thhe objects have the required grid properties
  test('Function will have objects with chessboard grid property values ', () => {
    expect(board(FILES, RANKS)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          coordinate: '1A',
          piece: null,
        },
        ),
      ]),
    );
  });

  test('Function will have objects with chessboard grid property values ', () => {
    expect(board(FILES, RANKS)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          coordinate: '8H',
          piece: null,
        }),
      ]),
    );
  });
});

console.log(board);