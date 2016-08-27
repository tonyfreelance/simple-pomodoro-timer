import * as actions from '../actions/index';
import store from '../store/configureStore';

let timerInterval;

export default {
    start: (dispatch) => {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            let timeLeft = store.getState().timer.timeLeft;
            timeLeft -= 1;
            if (timeLeft >= 0) {
                dispatch(actions.start(timeLeft));
            } else {
                clearInterval(timerInterval);
                dispatch(actions.stop());
            }
        }, 1000);
    },
    stop: (dispatch) => {
        clearInterval(timerInterval);
        dispatch(actions.stop());
    },
    reset: (dispatch) => {
        clearInterval(timerInterval);
        dispatch(actions.reset());
    }
};
