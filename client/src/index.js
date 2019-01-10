import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

import App from './components/App';
import Welcome from './components/Welcome';
import Register from './components/auth/Register';

// Setup redux store
const INITIAL_STATE = {};
const store = createStore(rootReducer, INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/user/register" component={Register} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
