const signUpReducer = (state = {}, action) => {
   switch (action.type) {
      case 'SIGN_UP':
         return {
            ...state,
            toSignup: true,
            toLogin: false,
         }
      case 'HOME':
         return {
            ...state,
            toHome: true
         };
      default:
         return state;
   };
};

export default signUpReducer;