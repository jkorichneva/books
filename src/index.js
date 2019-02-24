'use strict';

import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import booksStore from '../services/reducer';
import App from './App';

const store = createStore(booksStore);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('index')
);
