import React, { Component } from 'react';
import { connect } from 'react-redux';
import Mousetrap from 'mousetrap';

import timerSetup from '../api/timerSetup';
import '../styles/ControlButtons.css';

class ControlButtons extends Component {

  componentDidMount = () => {
    Mousetrap.bind('space', () => {
      const { timerStatus } = this.props;
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
      const { timerStatus } = this.props;
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

  disableButtons = (button) => {
    const { timerStatus } = this.props;

    // Start button style
    if(timerStatus === 'stopped' && button === 'start') {
      return 'green huge ui button';
    } else if (timerStatus === 'started' && button === 'start') {
      return 'green huge ui disabled button';
    }

    // Stop button style
    if(timerStatus === 'started' && button === 'stop') {
      return 'red huge ui button';
    } else if (timerStatus === 'stopped' && button === 'stop') {
      return 'red huge ui disabled button';
    }
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
          <button className={this.disableButtons('start')} onClick={this.start}>Start</button>
        </div>
        <div className="column">
          <button className={this.disableButtons('stop')} onClick={this.stop}>Stop</button>
        </div>
        <div className="column">
          <button className="huge ui button" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    timerStatus: state.timer.status
  };
};

export default connect(mapStateToProps)(ControlButtons);
