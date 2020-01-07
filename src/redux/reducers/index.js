import registrationReducer from './registration';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
   registration: registrationReducer,
});

export default allReducers;