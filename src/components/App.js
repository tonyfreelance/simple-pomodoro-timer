import React, { Component } from 'react';

import '../styles/App.css';
import PomodoroButtons from './PomodoroButtons';
import Timer from './Timer';
import ControlButtons from './ControlButtons';

class App extends Component {

  state = {
    minutes: 0,
    seconds: 5
  }

  longBreak = () => {
    clearInterval(this.timerInterval);
    this.setState({
      minutes: 15,
      seconds: 0
    }, this.start);
  }

  pomodoro = () => {
    clearInterval(this.timerInterval);
    this.setState({
      minutes: 25,
      seconds: 0
    }, this.start);
  }

  reset = () => {
    clearInterval(this.timerInterval);
    this.setState({
      minutes: 25,
      seconds: 0
    });
  }

  shortBreak = () => {
    clearInterval(this.timerInterval);
    this.setState({
      minutes: 5,
      seconds: 0
    }, this.start);
  }

  start = () => {
    let initialSeconds = this.state.minutes * 60 + this.state.seconds;
    this.timerInterval = setInterval(() => {
      initialSeconds -= 1;
      if (initialSeconds >= 0) {
        const minutes = Math.floor(initialSeconds / 60);
        const seconds = initialSeconds % 60;

        this.setState({
          minutes,
          seconds
        });
      } else {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  stop = () => {
    clearInterval(this.timerInterval);
  }

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Timer</h1>
        <PomodoroButtons
          onPomodoro={this.pomodoro}
          onShortBreak={this.shortBreak}
          onLongBreak={this.longBreak}
        />
        <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
        <ControlButtons
          onStart={this.start}
          onStop={this.stop}
          onReset={this.reset}
        />
      </div>
    );
  }
}

export default App;
