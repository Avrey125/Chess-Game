import React, {useState} from 'react';

  class Piece extends React.Component {

    constructor() {
      super()

      this.state = {
        stroke: "white",
        strokeWidth: 0
      }
    }

    render(){

      return (
        <g>
          <circle
            data-testid="circle"
            key={this.props.id}
            // onClick={onclick()}
            cx={this.props.xCoordinate}
            cy={this.props.yCoordinate}
            r="20"
            fill={this.props.fill}
            id={this.props.id}
          />
        </g>
      )
    }
}
  

export default Piece