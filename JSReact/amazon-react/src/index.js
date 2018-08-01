import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Session from "./requests/session";

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

Session.create({ email: "js@winterfell.gov", password: "supersecret" });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
