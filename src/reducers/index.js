import loginReducer from './login';
import signUpReducer from './signUp';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
   toLogin: loginReducer,
   toSignUp: signUpReducer
});

export default allReducers;