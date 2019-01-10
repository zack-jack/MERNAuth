import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import requireAuth from './requireAuth';

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <h2>Successfully logged out. Hope to see ya again soon!</h2>
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    actions
  ),
  requireAuth
)(Logout);
