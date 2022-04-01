import React, { Component } from "react";


 class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      timer: 0,
    };

    this.intervalID = null;

    console.log("run constructor()");
  }

  

  componentDidMount() {
    console.log("run componentDidMount()");
    this.intervalID = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);

    console.log(this.intervalID);
  }

  componentDidUpdate() {
    console.log("run componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("run componentWillUnmount()");
    clearInterval(this.intervalID);
  }

  render() {
    console.log("run render()");
    return (
      <div>
        <img  src ={Image}/>
        <h3>haider saidi</h3>
        <p>web devloper</p>
        <p>student</p>
        <h2>{this.state.timer}</h2>
      </div>
    );
  }
}

export default Counter;
