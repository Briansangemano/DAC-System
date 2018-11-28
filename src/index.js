//Dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';


//Routes
import Routes from './routes';

//Assets
import './index.css';
import * as serviceWorker from './serviceWorker';

export default function configureStore() {
  const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
  );
  return createStore(rootReducer, enhancer);
};

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <Routes/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
