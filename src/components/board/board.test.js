import React from 'react';
import TestRenderer from 'react-test-renderer'; // ES6
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Board from './board';

// I need to test to make sure my board component contains 64 square components
// arrange, act, assert
// Arrange, your app is in a certain original state
// Act, then something happens (click event, input, etc.)
// Assert, or make a hypothesis, of the new state of your app
// Your tests should test the functionality of the app, that mimic how it will be used by your end users.

describe('board.js', () => {

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
    let board = null;
    board = TestRenderer.create(<Board />);
    const boardAsJson = board.toJSON();
    expect(boardAsJson.props.className).toEqual('wrapper');
    console.log(boardAsJson);
  });
  it('contains 64 square objects with their own individual values', () => {
    let board = null;
    board = TestRenderer.create(<Board />);
    const boardAsJson = board.toJSON();
    expect(boardAsJson.children[0].props.className).toEqual('top');
    expect(boardAsJson.children[1].props.className).toEqual('box');
    expect(boardAsJson.children[1].props.value).toBe('A1');
    expect(boardAsJson.children[65].props.className).toEqual('bottom');
    expect(boardAsJson.children.length).toEqual(66);
  })
})
