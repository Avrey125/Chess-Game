import React from 'react';
import Piece from './piece';
// import Bishop from '../unique pieces/bishop'
// import King from '../unique pieces/king'
// import Knight from '../unique pieces/knight'
// import Queen from '../unique pieces/queen'
// import Rook from '../unique pieces/rook'

const items = [];
const array = [1,2,3,4,5,6,7,8]
const width = 600;
const spaceWidth = 75;

array.forEach((value, index) => {
  let x = index * width/array.length + spaceWidth/2;
  items.push(      
  <g key = {index}>
    <Piece id={index + 8} xCoordinate={x} yCoordinate={spaceWidth * 1.5} fill="white"/>
    <Piece id={index + 16} xCoordinate={x} yCoordinate={spaceWidth * 6.5} fill="black"/>
  </g>
  )
  }
)

 class Pieces extends React.Component {
  constructor(props) {
    super()

} 


  render() {
    return (
      <g id="topPieces">
        <Piece xCoordinate={this.props.xCoordinate * 0 + 37.5} yCoordinate={this.props.yCoordinate}
        id="WhiteRook1"
        fill="red"
        onClick={this.basicMovement}
        />
        {items} 
{/*         
        <Piece xCoordinate={this.props.xCoordinate * 1 + 37.5 } yCoordinate={this.props.yCoordinate}
        id="WhiteKnight1"
        fill="white"
        />
        <Piece xCoordinate={this.props.xCoordinate * 2 + 37.5} yCoordinate={this.props.yCoordinate}
        id="WhiteBishop1"
        fill="white"
        />
        <Piece xCoordinate={this.props.xCoordinate * 3 + 37.5} yCoordinate={this.props.yCoordinate}
        id="WhiteQueen"
        fill="white"
        />
        <Piece xCoordinate={this.props.xCoordinate * 4 + 37.5} yCoordinate={this.props.yCoordinate}
        id="WhiteKing"
        fill="white"
        />
        <Piece xCoordinate={this.props.xCoordinate * 5 + 37.5} yCoordinate={this.props.yCoordinate}
        id="WhiteBishop2"
        fill="white"
        />
        <Piece xCoordinate={this.props.xCoordinate * 6 + 37.5} yCoordinate={this.props.yCoordinate}
        id="WhiteKnight2"
        fill="white"
        />
        <Piece xCoordinate={this.props.xCoordinate * 7 + 37.5} yCoordinate={this.props.yCoordinate}
        id="WhiteRook2"
        fill="white"
        />

        <Piece xCoordinate={this.props.xCoordinate * 0 + 37.5} yCoordinate={this.props.yCoordinate * 2 * 7.5}
        id="BlackRook1"
        fill="black"
        onClick={this.basicMovement}
        />
        <Piece xCoordinate={this.props.xCoordinate * 1 + 37.5 } yCoordinate={this.props.yCoordinate * 2 * 7.5}
        id="BlackKnight1"
        fill="black"
        />
        <Piece xCoordinate={this.props.xCoordinate * 2 + 37.5} yCoordinate={this.props.yCoordinate * 2 * 7.5}
        id="BlackBishop1"
        fill="black"
        />
        <Piece xCoordinate={this.props.xCoordinate * 3 + 37.5} yCoordinate={this.props.yCoordinate * 2 * 7.5}
        id="BlackQueen"
        fill="black"
        />
        <Piece xCoordinate={this.props.xCoordinate * 4 + 37.5} yCoordinate={this.props.yCoordinate * 2 * 7.5}
        id="BlackKing"
        fill="black"
        />
        <Piece xCoordinate={this.props.xCoordinate * 5 + 37.5} yCoordinate={this.props.yCoordinate * 2 * 7.5}
        id="BlackBishop2"
        fill="black"
        />
        <Piece xCoordinate={this.props.xCoordinate * 6 + 37.5} yCoordinate={this.props.yCoordinate * 2 * 7.5}
        id="BlackKnight2"
        fill="black"
        />
        <Piece xCoordinate={this.props.xCoordinate * 7 + 37.5} yCoordinate={this.props.yCoordinate * 2 * 7.5}
        id="BlackRook2"
        fill="black"
/> */}
      </g>
    );
  }
}

export default Pieces
