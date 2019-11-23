import '@/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga'

import EntryRoute from '@/presentation/routes';

import rootSaga from "./store/rootSaga";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from "./store/rootReducer";

// redux configuration
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer(),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <EntryRoute />
  </Provider>,
  document.getElementById('root')
);
