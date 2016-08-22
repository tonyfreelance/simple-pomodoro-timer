export const startTimer = (initialSeconds) => {
  return {
    type: 'START_TIMER',
    initialSeconds
  };
}
