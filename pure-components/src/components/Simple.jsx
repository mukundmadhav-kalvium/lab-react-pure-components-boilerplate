import React, { Component } from "react";

export default class Simple extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      toggle: true,
    };
  }

  changeToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  increaseCount = () => {
    if (this.state.toggle) {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      //Extra
      this.setState({
        count: this.state.count,
      });
    }
  };
  render() {
    console.log("This is a simple component");
    return (
      <div>
        <hr />
        <h1>Simple Counter</h1>
        <h3>{this.state.count}</h3>
        <button
          onClick={this.changeToggle}
          style={{ backgroundColor: `${this.state.toggle ? "green" : "red"}` }}
        >
          Toggle
        </button>
        &nbsp; &nbsp;
        <button onClick={this.increaseCount}>+</button>
        <hr />
      </div>
    );
  }
}
