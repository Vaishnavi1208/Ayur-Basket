 // Class Component
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 10,
  };

  increment = () => {
    // modify state value
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    // decrement counter value by 1
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <i className="bi bi-dash-square-fill me-1" onClick={this.decrement}></i>
        {this.state.count}
        <i className="bi bi-plus-square-fill ms-1" onClick={this.increment}></i>
      </div>
    );
  }
}

export default Counter;