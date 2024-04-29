import { LOGIN_SUCCESS, LOGOUT } from '../actions/authActions';

// Initial state for the authentication
const initialState = {
  isAuthenticated: false,
  user: null
};

// Reducer function for managing authentication-related state
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;