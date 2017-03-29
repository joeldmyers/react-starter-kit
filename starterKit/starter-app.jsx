'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import App from './Containers/App';
import reducers from './reducers';

//
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

var newstore = createStoreWithMiddleware(reducers);

//ROOTAPP
ReactDOM.render(
  <Provider store={newstore}>
  <App/>
</Provider>, document.querySelector('.search-header-root'));
