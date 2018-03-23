import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Users from './Users';
import UserCreate from './UserCreate';
import UserUpdate from './UserUpdate';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/users" component={ Users } />
          <Route exact path="/users/create" component={ UserCreate } />
          <Route exact path="/users/1" component={ UserUpdate } />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
