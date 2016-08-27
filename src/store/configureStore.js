import * as redux from 'redux';

import { timerReducer } from '../reducers/index';

const store = (() => {
  const reducer = redux.combineReducers({
    timer: timerReducer
  });

  const configureStore = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return configureStore;
})()

export default store;
