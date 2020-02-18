import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import RootStore from './stores';

const root = new RootStore();

ReactDOM.render(
    <Provider {...root}>
        <App />
    </Provider>
    , document.getElementById('root')
);


serviceWorker.unregister();
