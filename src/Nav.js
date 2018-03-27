import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super();
    const topUser = this.getTopUser(props.users);
    this.state = {
      topUser
    };
  }
  componentWillReceiveProps(nextProps) {
    const topUser = this.getTopUser(nextProps.users);
    this.setState({ topUser });
  }
  getTopUser(_users) {
    if (_users.length) {
      return _users.reduce((top, user) => user.rating >= top.rating ? user : top);
    }
    return '';
  }
  render() {
    const { users } = this.props;
    const { topUser } = this.state;
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users ({ users.length })</Link></li>
        <li><Link to={`/users/${topUser.id}`}>Most Popular: { topUser ? topUser.name : '' }</Link></li>
        <li><Link to="/users/create">Create User</Link></li>
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state
  };
};

export default connect(mapStateToProps)(Nav);
