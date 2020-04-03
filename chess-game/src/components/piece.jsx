import React from 'react';

const styleSheet = {
  border: "2px solid black",
  width: "75px",
  height: "75px"
}

class Piece extends React.Component {
  render() {
    return (
      <button className="square" style={styleSheet}></button>
    )
  }
  
}

export default Squares