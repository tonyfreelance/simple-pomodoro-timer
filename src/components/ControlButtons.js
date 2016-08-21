import React, { Component } from 'react';

class ControlButtons extends Component {



  render() {
    return (
      <div>
        <button onClick={() => this.props.onStart()}>Start</button>
        <button onClick={() => this.props.onStop()}>Stop</button>
        <button onClick={() => this.props.onReset()}>Reset</button>
      </div>
    );
  }
}

export default ControlButtons;
