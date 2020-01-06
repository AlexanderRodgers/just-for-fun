const signUpReducer = (state, action) => {
   switch(action.type) {
      case 'SIGN_UP':
         return true;
      case 'HOME':
         return false;
      default:
         return false;
   };
};

export default signUpReducer;