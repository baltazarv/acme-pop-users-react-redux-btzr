import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, deleteUser } from './store';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user ? this.props.user.name : '',
      rating: this.props.user ? this.props.user.rating: ''
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.user ? nextProps.user.name : '',
      rating: nextProps.user ? nextProps.user.rating : '',
    });
  }
  onChangeName(ev) {
    this.setState({ name: ev.target.value });
  }
  onChangeRating(ev) {
    this.setState({ rating: ev.target.value });
  }
  onUpdate(ev) {
    ev.preventDefault();
    // if (!this.state.nam) this.setState({ name: 'user' });
    const user = { id: this.props.id, name: this.state.name, rating: this.state.rating * 1 };
    this.props.updateUser(user);
  }
  onDelete(ev) {
    ev.preventDefault();
    this.props.deleteUser({ id: this.props.id });
  }
  render() {
    const { user } = this.props;
    const { name, rating } = this.state;
    const { onChangeName, onChangeRating, onUpdate, onDelete } = this;
    if (!user) {
      return null;
    }
    return (
      <div>
        <h2>User - { user.name }</h2>
        <form onSubmit={ onUpdate }>
          <p>
            name: <input value={ name } onChange={ onChangeName } /><br />
            rating: <input value={ rating } onChange={ onChangeRating } /><br />
            <button>Update</button>
          </p>
        </form>
        <form onSubmit={ onDelete }><button>Delete</button></form>
      </div>
    )
  }
}

const mapStateToProps = (users, { id }) => {
  const user = users.find( _user => _user.id === id);
  return {
    user
  };
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    updateUser: (user) => dispatch(updateUser(user, history)),
    deleteUser: (user) => dispatch(deleteUser(user, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
