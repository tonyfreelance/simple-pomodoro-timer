import React, { Component } from 'react';

class PomodoroButtons extends Component {

  pomodoroButton = () => {
    this.props.onPomodoro();
  }

  shortBreakButton = () => {
    this.props.onShortBreak();
  }

  longBreakButton = () => {
    this.props.onLongBreak();
  }

  render() {
    return (
      <div>
        <button onClick={this.pomodoroButton}>Pomodoro</button>
        <button onClick={this.shortBreakButton}>Short Break</button>
        <button onClick={this.longBreakButton}>Long Break</button>
      </div>
    );
  }
}

export default PomodoroButtons;
