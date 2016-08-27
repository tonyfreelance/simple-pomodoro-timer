import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import './styles/index.css';
import './semantic-ui/semantic.min.css';
import './semantic-ui/semantic.min.js';
import './semantic-ui/components/modal.min.js';
import store from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
