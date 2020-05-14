
export function makeBoard(ranks, files) {
  return ranks.reduce((board, rank) => {
    files.forEach(file => {
      const coordinate = `${file}${rank}`;
      board.push({ coordinate: coordinate, piece: null});
    });
    return board;
  }, []);
}

export const FILES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
export const RANKS = [1, 2, 3, 4, 5, 6, 7, 8];
export const BOARD = makeBoard(RANKS, FILES);
