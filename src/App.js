
import React, { Component } from "react";
import Counter from "./State";
export default class App extends Component {
  state = {
    isVisible: false,
  };

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div className="App">
        <button  onClick={this.toggleVisibility}>
          {this.state.isVisible ? "Hide Counter" : "Show Counter"}
        </button>
        {this.state.isVisible && <Counter />}
      </div>
    );
  }
}
