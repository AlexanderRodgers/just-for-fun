const loginReducer = (state, action) => {
   switch(action.type) {
      case 'LOGIN':
         return true;
      case 'HOME':
         return false;
      default:
         return false;
   };
};

export default loginReducer;