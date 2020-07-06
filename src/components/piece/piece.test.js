import React from 'react'
import TestRenderer from 'react-test-renderer' // ES6
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Piece from './piece'

describe('piece.js', () => {
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
    let piece = null
    piece = TestRenderer.create(<Piece />)
    const pieceAsJson = piece.toJSON()
    expect(pieceAsJson.props.className).toEqual('piece')
    console.log(pieceAsJson)
  })
})
