import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderNavLinks = () => {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/user/logout">Logout</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/user/register">Register</Link>
          <Link to="/user/login">Login</Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        {this.renderNavLinks()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(Header);
