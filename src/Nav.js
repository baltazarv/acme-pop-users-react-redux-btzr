import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super();
    const topUserName = this.getTopName(props.users);
    this.state = {
      topUserName
    }
  }
  componentWillReceiveProps(nextProps) {
    const topUserName = this.getTopName(nextProps.users);
    this.setState({ topUserName });
  }
  getTopName(_users) {
    if (_users.length) {
      const topUser = _users.reduce((top, user) => user.rating >= top.rating ? user : top);
      return topUser.name;
    }
    return '';
  }
  render() {
    const { users } = this.props;
    const { topUserName } = this.state;
    return (
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/users'>Users ({ users.length })</Link></li>
        <li><Link to='/users/1'>Most Popular: { topUserName }</Link></li>
        <li><Link to='/users/create'>Create User</Link></li>
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state
  }
}

export default connect(mapStateToProps)(Nav);
