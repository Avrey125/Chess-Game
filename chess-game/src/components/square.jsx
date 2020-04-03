import React from 'react';

const styleSheet = {
  border: "2px solid black",
  width: "75px",
  height: "75px"
}

class Squares extends React.Component {
  render() {
    return (
    <button className="square" style={styleSheet}>{this.props.value}</button>
    )
  }
}

export default Squares