import React from 'react';
import Home from './pages/home.js';
import Page1 from './pages/page1.js';
import Page2 from './pages/page2.js';
import {Route} from 'react-router';

export default () => (
	<div>
    	<Route exact path="/" component={Home} />
    	<Route path="/page1" component={Page1} />
    	<Route path="/page2" component={Page2} />
	</div>
);