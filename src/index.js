import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';

import configure from './store';
import App from './App';
import CallingPattern from './CallingPattern';
import './index.css';
import { fetchDepartures, fetchCallingPattern } from './actionCreators';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App } onEnter={ fetchDepartures(store.dispatch) } />
      <Route path="/:trainId" component={ CallingPattern } onEnter={ fetchCallingPattern(store.dispatch) }/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
