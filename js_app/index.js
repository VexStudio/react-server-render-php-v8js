import React from 'react';
import ReactDOMServer from 'react-dom/server'
import App from './app';
print(ReactDOMServer.renderToStaticMarkup(<App />));