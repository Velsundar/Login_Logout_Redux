// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  users: [],
  loggedInUser: null,
};

// Action types
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

// Action creators
export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

export const loginUser = (credentials) => ({
  type: LOGIN_USER,
  payload: credentials,
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
  });

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case LOGIN_USER:
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      ); 
      return {
        ...state,
        loggedInUser: user,
      };
      case LOGOUT_USER:
        return {
          ...state,
          loggedInUser: null,
        };
    default:
      return state;
  }
};

// Create the store
const store = createStore(reducer);

export default store;
