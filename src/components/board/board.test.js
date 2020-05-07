const board = require('../../services/boardService');

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANKS = [1, 2, 3, 4, 5, 6, 7, 8];

// testing to make sure the array is populated with 64 object values
test('Function will create an array of square objects', () => {
  expect (board(FILES, RANKS)).toHaveLength(64);
});

// testing to make sure thhe objects have the required grid properties
test('Function will have objects with chessboard grid property values ', () => {
  expect(board(FILES, RANKS)).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: '1a',
        piece: null,
        color: 'white' ,
      }),
    ]),
  );
});

test('Function will have objects with chessboard grid property values ', () => {
  expect(board(FILES, RANKS)).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: '8h',
        piece: null,
        color: 'white',
      }),
    ]),
  );
});

console.log(board);