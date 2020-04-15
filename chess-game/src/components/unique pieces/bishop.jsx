import React from 'react';

  class Piece extends React.Component {

    constructor() {
      super()

      this.state = {
        clicked: false,
      }

      this.hasBeenClicked = this.hasBeenClicked.bind(this)
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
        <g>
          <circle
            data-testid="circle"
            key={this.props.id}
            type={this.props.type}
            onClick={this.hasBeenClicked}
            cx={this.props.xCoordinate}
            cy={this.props.yCoordinate}
            r="20"
            fill={this.props.fill}
            id={this.props.id}
            text="Bishop"
          />
        </g>
      )
    }
}
  

export default Piece