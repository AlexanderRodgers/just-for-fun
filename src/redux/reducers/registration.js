import { TO_SIGNUP, TO_LOGIN, TO_HOME } from '../actionTypes';

const initialState = {
   toLogin: false,
   toSignup: false,
   toHome: true
};

const registrationReducer = (state = initialState, action) => {
   switch (action.type) {
      case TO_LOGIN:
         console.log('reducing!');
         return {
            ...state,
            toLogin: true,
            toHome: false,
            toSignUp: false
         };
      case TO_SIGNUP:
         return {
            ...state,
            toSignUp: true,
            toLogin: false,
            toHome: false
         }
      case TO_HOME:
         return {
            ...state,
            toHome: true,
            toLogin: false,
            toSignUp: false
         };
      default:
         return state;
   };
};

export default registrationReducer;