import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer,applyMiddleware(thunk))
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
