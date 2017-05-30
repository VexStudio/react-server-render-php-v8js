import React from 'react';
import {Route, Router} from 'react-router';
import Routes from './routes';
import {createMemoryHistory} from 'history';

// create history object 
var historyFromPhp = createMemoryHistory()
// set history location to uri we got from php
historyFromPhp.push(__CurrentPageLocation__);

export default () => (
    <Router history={historyFromPhp}>
        <Routes />
    </Router>
);
