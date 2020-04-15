import React from 'react';

let spaceWidth = 75;

  class Piece extends React.Component {


    constructor() {
      super()

      this.state = {
        clicked: false,
        xCoordinate: spaceWidth/2,
        yCoordinate: spaceWidth/2,
      }

      this.pawnMovement = this.pawnMovement.bind(this)
      this.hasBeenClicked = this.hasBeenClicked.bind(this)
    }

   pawnMovement() {
      this.setState({yCoordinate: this.state.yCoordinate + 75})
      console.log('stuff')
  } 

    hasBeenClicked() {
      if({clicked: false}) {
        this.setState({clicked: true})
      } else if({clicked: true}){
        this.setState({clicked: false})
      }

      console.log("this has been clicked", this.state)
    }

    render(){

      return (
        <g key={this.state.id}>
          <circle
            data-testid="circle"
            type={this.state.type}
            onClick={this.pawnMovement}
            cx={this.state.xCoordinate}
            cy={this.state.yCoordinate}
            r="20"
            fill={this.state.fill}
            id={this.state.id}
          />
        </g>
      )
    }
}
  

export default Piece