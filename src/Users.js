import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import store from './store';

const Users = ({ users }) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {
          users.map( user => {
            return (
              <li key={ user.id }>
                <Link to={`/users/${ user.id }`}>{ user.name }</Link> <button>-</button> { user.rating } <button>+</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state
  }
}

export default connect(mapStateToProps)(Users);
