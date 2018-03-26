import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { addPoint, subtractPoint } from './store';

class Users extends Component {
  constructor() {
    super();
  }
  addPoint() {
    console.log('add 1');
    // console.log('add 1 to', user.name);
  }
  subtractPoint(user) {
    console.log('subtract 1 from', user.name);
  }
  render() {
    const { users } = this.props;
    const { addPoint, subtractPoint } = this;
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {
            users.map( user => {
              return (
                <li key={ user.id }>
                  <Link to={`/users/${ user.id }`}>{ user.name }</Link> <button onClick={ subtractPoint(user) }>-</button> { user.rating } <button onClick={ addPoint }>+</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: user => dispatch(updateUser(user))
  }
}

export default connect(mapStateToProps)(Users);
