// Code CoordinatesButton Component Here
import { Component } from "react";
import React from "react";

class CoordinatesButton extends Component {
  constructor() {
    super();
    this.state = {
      coordinateArray: [],
    };
  }

  // getCoordinates = (clientX, clientY) => {
  //     this.setState ({
  //         coordinateArray: [clientX, clientY]},
  //         () => this.props.onReceiveCoordinates(this.state.coordinateArray)
  //         // console.log(this.state.coordinateArray)
  //     )

  // }

  getCoordinates = (clientX, clientY) => {
     let coordinateArray = [clientX, clientY]
    this.props.onReceiveCoordinates(coordinateArray);
  };

  

  render() {
    // console.log(this.props);
    return (
      <button
        onClick={(event) => {
          this.getCoordinates(event.clientX, event.clientY);
        }}
      >
        Coordinates
      </button>
    );
  }
}

export default CoordinatesButton;
