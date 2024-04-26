import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
const rootReducer = combineReducers({
    auth: authReducer
    // Add other reducers here when needed
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;