import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import * as actions from '../../actions';

class Register extends Component {
  onSubmit = formProps => {
    this.props.register(formProps);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>

        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>

        <fieldset>
          <label>Confirm Password</label>
          <Field
            name="passwordConfirm"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>

        <button>Register</button>
      </form>
    );
  }
}

export default compose(
  connect(
    null,
    actions
  ),
  reduxForm({ form: 'register' })
)(Register);
