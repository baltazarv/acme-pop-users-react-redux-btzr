import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUser } from './store';

class RatingsUpdate extends Component {
  constructor() {
    super();
    this.addPoint = this.addPoint.bind(this);
    this.subtractPoint = this.subtractPoint.bind(this);
  }
  addPoint() {
    const user = Object.assign({}, this.props.user, { rating: (this.props.user.rating+1)});
    this.props.updateUser(user);
  }
  subtractPoint() {
    const user = Object.assign({}, this.props.user, { rating: (this.props.user.rating-1)});
    this.props.updateUser(user);
  }
  render() {
    const { user } = this.props;
    const { addPoint, subtractPoint } = this;
    return (
      <li>
        <Link to={`/users/${ user.id }`}>{ user.name }</Link> <button onClick={ subtractPoint }>-</button> { user.rating } <button onClick={ addPoint }>+</button>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(null, mapDispatchToProps)(RatingsUpdate);
