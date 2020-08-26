import counterReducer from './counter';
import loggedReducer from './is_logged'
import {combineReducers} from 'redux';

const allReducers =combineReducers({
    counter: counterReducer,
    islogged: loggedReducer

})

export default allReducers;