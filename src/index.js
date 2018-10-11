import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import storeManager from './store-manager';
import initialState from './initialState';

const store = createStore(storeManager, initialState);
const rootElement = document.getElementById('root');

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), rootElement);


serviceWorker.register();
