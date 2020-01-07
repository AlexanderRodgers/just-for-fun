import registrationReducer from './registration';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
   toLogin: registrationReducer,
});

export default allReducers;