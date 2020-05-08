
function makeBoard(ranks, files) {
  return ranks.reduce((board, rank) => {
    files.forEach(file => {
      const coordinate = `${file}${rank}`;
      board.push({ coordinate: coordinate, piece: null});
    });
    return board;
  }, []);
}

module.exports = (makeBoard);
