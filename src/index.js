'use strict';

import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import booksStore from '../services/reducer';
import App from './App';
const rootReducer = combineReducers({
    form: formReducer,
    books: booksStore,
});
const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('index')
);
