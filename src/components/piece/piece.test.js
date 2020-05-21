import React from 'react';
import TestRenderer from 'react-test-renderer'; // ES6
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Piece from './piece';
import Board from '../board/board';

describe('piece.js', () => {

    let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
  });
  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  it("renders with or without a name", () => {
    let piece = null;
      piece = TestRenderer.create(<Piece />);
    const pieceAsJson = piece.toJSON();
    expect(pieceAsJson.props.className).toEqual('piece')
  });

  it('contains 64 square objects with their own individual values', () => {
    let board = null;
    board = TestRenderer.create(<Board />);
    const boardAsJson = board.toJSON();
    let coordinateValues = 7;
    let squares = boardAsJson.children.splice(1,64);
    let coordinates = squares.map( (square) => {
      return square.props.color;
    });
    console.log(squares);
    expect(coordinates).toEqual(coordinateValues);
  })

});
