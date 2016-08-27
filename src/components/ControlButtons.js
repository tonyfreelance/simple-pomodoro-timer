import React, { Component } from 'react';
import { connect } from 'react-redux';
import Mousetrap from 'mousetrap';

import timerSetup from '../api/timerSetup';
import '../styles/ControlButtons.css';
import store from '../store/configureStore';

class ControlButtons extends Component {

  componentDidMount = () => {
    Mousetrap.bind('space', () => {
      const timerStatus = store.getState().timer.status;
      if (timerStatus === 'started') {
        this.stop();
      } else {
        this.start();
      }
    });
    Mousetrap.bind('alt+r', () => {
      this.reset();
    });
  }

  componentWillUnmount = () => {
    Mousetrap.unbind('space', () => {
      const timerStatus = store.getState().timer.status;
      if (timerStatus === 'started') {
        this.stop();
      } else {
        this.start();
      }
    });
    Mousetrap.unbind('alt+r', () => {
      this.reset();
    });
  }

  reset = () => {
    const { dispatch } = this.props;
    timerSetup.reset(dispatch);
  }

  start = () => {
    const { dispatch } = this.props;
    timerSetup.start(dispatch);
  }

  stop = () => {
    const { dispatch } = this.props;
    timerSetup.stop(dispatch);
  }

  render() {
    return (
      <div className="ui five column stackable centered grid">
        <div className="column">
          <button className="green huge ui button" onClick={this.start}>Start</button>
        </div>
        <div className="column">
          <button className="red huge ui button" onClick={this.stop}>Stop</button>
        </div>
        <div className="column">
          <button className="huge ui button" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default connect()(ControlButtons);
