// function instantiates an empty array, and populates it withh 64 objects, all with unique ids cooresponding to chessboard grid values
function makeBoard(ranks, files) {
  return ranks.reduce((board, rank) => {
    files.forEach(file => {
      const id = `${file}${rank}`;
      board.push({ id: id, piece: null, color: 'white' });
    });
    return board;
  }, []);
}

module.exports =  (makeBoard);