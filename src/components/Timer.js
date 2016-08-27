import React from 'react';
import { connect } from 'react-redux';
import Push from 'push.js';

import '../styles/Timer.css';

const Timer = ({ timer }) => {
  const minutes = Math.floor(timer.timeLeft / 60);
  const seconds = timer.timeLeft % 60;
  const permission = Notification.permission;

  if(minutes === 0 && seconds === 0 && permission === 'granted') {
    Push.create('The time is over!', {
      body: 'Do you know the time is over?',
      timeout: 4000
    });
  }

  return (
    <div className="timer">
      <p>{minutes >= 10 ? minutes : '0' + minutes}:{seconds >= 10 ? seconds : '0' + seconds}</p>
    </div>
  );
};

export default connect(state => state)(Timer);
