const initialTimerState = {
    timeLeft: 1500,
    status: 'stopped'
};

export const timerReducer = (state = initialTimerState, action) => {
    switch (action.type) {
        case 'START_TIMER':
            return {
                ...state,
                timeLeft: action.timeLeft,
                status: 'started'
            };
        case 'STOP_TIMER':
            return {
              ...state,
              status: 'stopped'
            };
        case 'RESET_TIMER':
            return {
                ...state,
                timeLeft: 1500,
                status: 'stopped'
            };
        case 'START_POMODORO':
            return {
                ...state,
                timeLeft: 1500,
                status: 'started'
            };
        case 'START_SHORT_BREAK':
            return {
                ...state,
                timeLeft: 300,
                status: 'started'
            };
        case 'START_LONG_BREAK':
            return {
                ...state,
                timeLeft: 900,
                status: 'started'
            };
        default:
            return state;
    }
}
