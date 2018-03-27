import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Users from './Users';
import User from './User';
import UserCreate from './UserCreate';
import { loadUsers } from './store';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/users" component={ Users } />
            <Route exact path="/users/create" component={ UserCreate } />
            <Route exact path="/users/:id" render={({ match, history }) => <User id={ match.params.id*1 } history={ history }/>} />
            <Route exact path="/users/create" render={({ history }) => <UserCreate history={ history }/>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(loadUsers())
  };
};

export default connect(null, mapDispatchToProps)(App);
