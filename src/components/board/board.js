import React from "react";
import "../../styles/styles.css";
import Square from "../square/square";


const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];
const RANKS = [1, 2, 3, 4, 5, 6, 7, 8];

// function takes in two arrays and 'zips' them together to output proper chessboard square values
function makeBoard(ranks, files) {
  return ranks.reverse().reduce((board, rank) => {
    files.forEach(file => {
      const id = `${file}${rank}`;
      board.push({ id: id, piece: null, color: "white" });
    });
    return board;
  }, []);
}

const board = makeBoard(RANKS, FILES);
console.log(board);

function Board() {
  return (
    <div className="wrapper">
      <div className="top">
        <div className="wrapper-inner">
        {FILES.map(value => ( <div key={value} className="box-inner">{value}</div> ))}
        </div>
      </div>
      {board.map(value => (
        <Square id={value.id} />
      ))}
      <div className="bottom">
        <div className="wrapper-inner">
        {FILES.map(value => ( <div key={value + 8} className="box-inner">{value}</div> ))}
        </div>
      </div>
    </div>
  );
}

export default (Board)
