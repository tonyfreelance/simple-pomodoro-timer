import React from 'react';

const Timer = ({ minutes, seconds }) => {

  return (
    <div>
      <p>{minutes >= 10 ? minutes : '0' + minutes} : {seconds >= 10 ? seconds : '0' + seconds}</p>
    </div>
  );
};

export default Timer;
