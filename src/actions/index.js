export const start = (timeLeft) => {
  return {
    type: 'START_TIMER',
    timeLeft
  };
}

export const stop = () => {
  return {
    type: 'STOP_TIMER'
  };
}

export const reset = () => {
  return {
    type: 'RESET_TIMER'
  };
}

export const pomodoro = () => {
  return {
    type: 'START_POMODORO'
  };
}

export const shortBreak = () => {
  return {
    type: 'START_SHORT_BREAK'
  };
}

export const longBreak = () => {
  return {
    type: 'START_LONG_BREAK'
  };
}
