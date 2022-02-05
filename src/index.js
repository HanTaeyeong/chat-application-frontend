import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

ReactDOM.render(
    <BrowserRouter navigator={history} location={history.location} >
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
