import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
const store = configureStore({
  reducer: {
    auth: authReducer,
    // other reducers here
  },
});
export default store;