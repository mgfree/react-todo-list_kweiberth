import { combineReducers } from 'redux';
import todos from './todoReducer';
import user from './userReducer';

export default combineReducers({
    todos,
    user
})