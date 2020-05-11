
const FILES = ['Jack', 'Seamore', 'Hugh', 'Michael', 'Benjamin', 'Dixie', 'Justin', 'William'];
const RANKS = ['Dover', 'Normus', 'Butz', 'Jaenus', 'Kanoff', 'Sider', 'Stroker', 'unt'];
const randomFiles = FILES[Math.floor(Math.random() * FILES.length)];
const randomRanks = RANKS[Math.floor(Math.random() * RANKS.length)];
const randomFileRank = `${randomRanks}${randomFiles}`;

function makeBoard(ranks, files) {
  return ranks.reduce((board, rank) => {
    files.forEach(file => {
      const coordinate = `${file}${rank}`;
      board.push({ coordinate: coordinate, piece: null});
    });
    return board;
  }, []);
}

describe('Testing makeBoard Function', () => {
  test('Function will output a 2 word combinatio', () => {
    expect(makeBoard(FILES, RANKS)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          coordinate: randomFileRank,
          piece: null,
        },
        ),
      ]),
    );
  });
  test('Function will output a 2 word combinatiodespite the input arrays being reversed', () => {
    expect(makeBoard(FILES.reverse(), RANKS.reverse())).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          coordinate: randomFileRank,
          piece: null,
        },
        ),
      ]),
    );
  });
});

