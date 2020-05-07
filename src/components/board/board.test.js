import board from '../board/board';
import BoardService from '../../services/boardService';
import { RANKS, FILES } from '../../data.js';

const EXPECTED = [{ coordinate: 'A1' }];

describe ('Board Component', () => {
  let spyBoardService, _boardService;
  beforeAll(() => {
    _boardService = new BoardService();
    spyBoardService = jest.spyOn(_boardService, 'makeBoardSquares').mockImplementation(() => {
      return EXPECTED;
    });
  });
  beforeEach(() => {
    spyBoardService.mockClear();
  });
  afterAll(() => {
    spyBoardService.mockRestore();
  });

  test ('buildBoard returns an array of objects successfully', (done) => {
    const _board = board();
    // const testSquareA1 = _board.getElementById('A1');
    expect(spyBoardService).toHaveBeenCalledWith(RANKS, FILES);
    // expect(testSquareA1.inerHTML).toEqual('<div class"piece">A1</div>');
    console.log(_board);
    done();
  });
});

// // testing to make sure the array is populated with 64 object values
// test('Function will create an array of square objects', () => {
//   expect (board(FILES, RANKS)).toHaveLength(64);
// });

// // testing to make sure thhe objects have the required grid properties
// test('Function will have objects with chessboard grid property values ', () => {
//   expect(board(FILES, RANKS)).toEqual(
//     expect.arrayContaining([
//       expect.objectContaining({
//         id: '1a',
//         piece: null,
//         color: 'white' ,
//       }),
//     ]),
//   );
// });

// test('Function will have objects with chessboard grid property values ', () => {
//   expect(board(FILES, RANKS)).toEqual(
//     expect.arrayContaining([
//       expect.objectContaining({
//         id: '8h',
//         piece: null,
//         color: 'white',
//       }),
//     ]),
//   );
// });

// console.log(board);