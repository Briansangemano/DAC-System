//Dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

//Routes
import Routes from './routes';

//Assets
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Router>
      <Routes/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
