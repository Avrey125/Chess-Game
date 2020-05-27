import React from 'react'
import TestRenderer from 'react-test-renderer' // ES6
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Board from './board'

// I need to test to make sure my board component contains 64 square components
// arrange, act, assert
// Arrange, your app is in a certain original state
// Act, then something happens (click event, input, etc.)
// Assert, or make a hypothesis, of the new state of your app
// Your tests should test the functionality of the app, that mimic how it will be used by your end users.

describe('board.js', () => {
  let container = null
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div')
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container)
  })
  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })
  it('renders with or without a name', () => {
    let board = null
    board = TestRenderer.create(<Board />)
    const boardAsJson = board.toJSON()
    expect(boardAsJson.props.className).toEqual('wrapper')
  })
  it('contains 64 square objects with their own individual values', () => {
    let board = null
    board = TestRenderer.create(<Board />)
    const boardAsJson = board.toJSON()
    const coordinateValues = [
      'A1',
      'B1',
      'C1',
      'D1',
      'E1',
      'F1',
      'G1',
      'H1',
      'A2',
      'B2',
      'C2',
      'D2',
      'E2',
      'F2',
      'G2',
      'H2',
      'A3',
      'B3',
      'C3',
      'D3',
      'E3',
      'F3',
      'G3',
      'H3',
      'A4',
      'B4',
      'C4',
      'D4',
      'E4',
      'F4',
      'G4',
      'H4',
      'A5',
      'B5',
      'C5',
      'D5',
      'E5',
      'F5',
      'G5',
      'H5',
      'A6',
      'B6',
      'C6',
      'D6',
      'E6',
      'F6',
      'G6',
      'H6',
      'A7',
      'B7',
      'C7',
      'D7',
      'E7',
      'F7',
      'G7',
      'H7',
      'A8',
      'B8',
      'C8',
      'D8',
      'E8',
      'F8',
      'G8',
      'H8',
    ]
    let squares = boardAsJson.children.splice(1, 64)

    let coordinates = squares.map(square => {
      return square.props.id
    })
    expect(coordinates).toEqual(coordinateValues)
  })
  it('will not contain a coordinate value past 8', () => {
    const expected = ['H9']
    const expected2 = ['A9']

    let board = null
    board = TestRenderer.create(<Board />)
    const boardAsJson = board.toJSON()
    expect(boardAsJson.children).toEqual(expect.not.arrayContaining(expected))
    expect(boardAsJson.children).toEqual(expect.not.arrayContaining(expected2))
  })
})
