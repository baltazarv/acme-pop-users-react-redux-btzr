import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = ({ users }) => {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/users'>Users ({ users.length })</Link></li>
      <li><Link to='/users/1'>Most Popular: moe</Link></li>
      <li><Link to='/users/create'>Create User</Link></li>
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state
  }
}

export default connect(mapStateToProps)(Nav);
