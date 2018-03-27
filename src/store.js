import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const SET_USERS = 'setUsers';
const UPDATE_USER = 'updateUser';
const DELETE_USER = 'deleteUser';
const CREATE_USER = 'createUser';

const reducer = (state = [], action) => {
  switch(action.type) {
    case SET_USERS:
      state = action.users;
      break;
    case UPDATE_USER:
      state = state.map( user => user.id === action.user.id ? action.user : user);
      break;
    case DELETE_USER:
      state = state.filter(user => user.id !== action.user.id);
      break;
    case CREATE_USER:
      state = [...state, action.user];
      break;
  }
  return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

// Return a function that accepts `dispatch` to be dispatched after async action
const loadUsers = () => {
  return (dispatch) => {
    return axios.get('/api/users')
    .then( result => result.data)
    .then( users => dispatch({
        type: SET_USERS,
        users
      })
    );
    // .then(() => console.log(store.getState()))
  };
};

const updateUser = (user, history) => {
  return (dispatch) => {
    // console.log('user', user)
    return axios.put(`/api/users/${user.id}`, user)
    .then( result => result.data)
    .then( user => dispatch({
        type: UPDATE_USER,
        user
      })
    )
    .then( () => {
      if (history) history.push('/users');
    });
  }
}

const createUser = (user, history) => {
  return (dispatch) => {
    return axios.post('/api/users/', user)
    .then( result => result.data)
    .then( user => dispatch({
        type: CREATE_USER,
        user
      })
    )
    .then( () => {
      history.push('/users');
    });
  }
}

const deleteUser = (user, history) => {
  return (dispatch) => {
    // console.log('user', user)
    return axios.delete(`/api/users/${user.id}`)
    .then( () => dispatch({
        type: DELETE_USER,
        user
      })
    )
    .then( () => {
      history.push('/users');
    });
  }
}

export default store;
export { loadUsers, updateUser, createUser, deleteUser };
