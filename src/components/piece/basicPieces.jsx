import React from 'react';
import Piece from './hookPiece';

 class Pieces extends React.Component {
  constructor(props) {
    super()
} 

  render() {
    return (
      <g>
        <Piece />
      </g>
    );
  }
}

export default Pieces
