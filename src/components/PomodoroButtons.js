import React, { Component } from 'react';
import { connect } from 'react-redux';
import Mousetrap from 'mousetrap';

import * as actions from '../actions/index';
import timerSetup from '../api/timerSetup';

class PomodoroButtons extends Component {

  componentDidMount = () => {
    Mousetrap.bind('alt+p', () => {
      this.pomodoro();
    });
    Mousetrap.bind('alt+s', () => {
      this.shortBreak();
    });
    Mousetrap.bind('alt+l', () => {
      this.longBreak();
    });
  }

  componentWillUnmount = () => {
    Mousetrap.unbind('alt+p', () => {
      this.pomodoro();
    });
    Mousetrap.unbind('alt+s', () => {
      this.shortBreak();
    });
    Mousetrap.unbind('alt+l', () => {
      this.longBreak();
    });
  }

  pomodoro = () => {
    const { dispatch } = this.props;
    dispatch(actions.pomodoro());
    timerSetup.start(dispatch);
  }

  shortBreak = () => {
    const { dispatch } = this.props;
    dispatch(actions.shortBreak());
    timerSetup.start(dispatch);
  }

  longBreak = () => {
    const { dispatch } = this.props;
    dispatch(actions.longBreak());
    timerSetup.start(dispatch);
  }

  render() {
    return (
      <div className="ui huge three item blue inverted menu">
        <a className="item" onClick={() => this.shortBreak()}>Short Break</a>
        <a className="active item" onClick={() => this.pomodoro()}>Pomodoro</a>
        <a className="item" onClick={() => this.longBreak()}>Long Break</a>
      </div>
    );
  }
}

export default connect()(PomodoroButtons);
