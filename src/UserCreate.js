import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, deleteUser, createUser } from './store';

class UserCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  onSave(ev) {
    ev.preventDefault();
    const user = { name: this.state.name };
    this.props.saveUser(user);
  }
  onChangeName(ev) {
    this.setState({ name: ev.target.value });
  }
  render() {
    const { name } = this.state;
    const { onChangeName, onSave } = this;
    return (
      <div>
        <h2>Create User</h2>
        <form onSubmit={ onSave }>
          name: <input value={ name } onChange={ onChangeName } /><br />
          <button>Create</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    saveUser: (user) => dispatch(createUser(user, history))
  }
}

export default connect(null, mapDispatchToProps)(UserCreate);
