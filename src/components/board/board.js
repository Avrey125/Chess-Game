import React from "react";
import "./board.css";
import Square from "../square/square";
import { RANKS, FILES } from '../../data.js';
import BoardService from '../../services/boardService'

export default function Board () {
  const _boardService = new BoardService();
  const boardSquares = _boardService.makeBoardSquares(RANKS, FILES);
  return (
    <div className="wrapper">
      <div className="top">
        <div className="wrapper-inner">
        {FILES.map(value => ( <div key={value} className="box-inner">{value}</div> ))}
        </div>
      </div>
      {boardSquares.map(value => (
        <Square value={value.coordinate} />
      ))}
      <div className="bottom">
        <div className="wrapper-inner">
        {FILES.map(value => ( <div key={value} className="box-inner">{value}</div> ))}
        </div>
      </div>
    </div>
  );
};
