import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/index.js';
import * as Sentry from '@sentry/browser';
import "assets/main.css";
import * as serviceWorker from './serviceWorker';

Sentry.init({dsn: "https://2282ab45b6784546b3c9e628152baddf@o377703.ingest.sentry.io/5285845"});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
