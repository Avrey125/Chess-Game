import React from "react";
import "../../styles/styles.css";
import Square from "../square/square";


const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8];

function makeBoard(ranks, files) {
  return ranks.reduce((board, rank) => {
    files.forEach(file => {
      const id = `${file}${rank}`;
      board.push({ id: id, piece: null, color: "white" });
    });
    return board;
  }, []);
}

const board = makeBoard(ranks, files);
console.log(board);

export default function Board() {
  return (
    <div className="wrapper">
      <div className="top">
        <div className="wrapper-inner">
          <div className="box-inner">A</div>
          <div className="box-inner">B</div>
          <div className="box-inner">C</div>
          <div className="box-inner">D</div>
          <div className="box-inner">E</div>
          <div className="box-inner">F</div>
          <div className="box-inner">G</div>
          <div className="box-inner">H</div>
        </div>
      </div>
      {board.map(value => (
        <Square id={value.id} />
      ))}
      <div className="bottom">
        <div className="wrapper-inner">
          <div className="box-inner">A</div>
          <div className="box-inner">B</div>
          <div className="box-inner">C</div>
          <div className="box-inner">D</div>
          <div className="box-inner">E</div>
          <div className="box-inner">F</div>
          <div className="box-inner">G</div>
          <div className="box-inner">H</div>
        </div>
      </div>
    </div>
  );
}
