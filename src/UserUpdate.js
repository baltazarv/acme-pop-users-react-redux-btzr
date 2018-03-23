import React, { Component } from 'react';

class UserUpdate extends Component {
  render() {
    return (
      <div>
        <h1>moe</h1>
        <p>
          name: <input /><br />
          rating: <input /><br />
          <button>Update</button>
        </p>
        <button>Delete</button>
        </div>
    )
  }
}

export default UserUpdate;
