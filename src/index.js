import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./config";
import App from "./Domains/App/container";
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
