import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import postReducer  from './posts.reducer';

export default combineReducers({
    userReducer,
    postReducer,
});