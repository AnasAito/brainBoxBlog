import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/index.js';
// import * as Sentry from '@sentry/browser';
import "assets/main.css";
import * as serviceWorker from './serviceWorker';

// Sentry.init({dsn: "https://ac9b618ef527464ab8734b66d7ab61db@o377703.ingest.sentry.io/5251923"});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
