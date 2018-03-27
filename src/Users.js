import React from 'react';
import { connect } from 'react-redux';
import RatingsUpdate from './RatingsUpdate';

const Users = ({ users}) => {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {
            users.map( user => {
              return (
                  <RatingsUpdate key={ user.id } user={ user } />
              );
            })
          }
        </ul>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    users: state
  };
};

export default connect(mapStateToProps)(Users);
