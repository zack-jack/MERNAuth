import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers';

import App from './components/App';
import Welcome from './components/Welcome';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard';

// Setup redux store
const INITIAL_STATE = {};
const store = createStore(
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/user/register" render={() => <Register />} />
        <Route path="/dashboard" render={() => <Dashboard />} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
