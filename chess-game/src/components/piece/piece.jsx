import React from 'react';

  class Piece extends React.Component {

    constructor() {
      super()

      this.state = {
        clicked: false,
        xCoordinate: 75,
        yCoordinate: 37.5
      }

      // this.hasBeenClicked = this.hasBeenClicked.bind(this)
    }

    // hasBeenClicked() {
    //   if({clicked: false}) {
    //     this.setState({clicked: true})
    //   } else if({clicked: true}){
    //     this.setState({clicked: false})
    //   }

    //   console.log("this has been clicked", this.state)
    // }

    render(){

      return (
        <g key={this.props.id}>
          <circle
            data-testid="circle"
            type={this.props.type}
            onClick={this.props.onClick}
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