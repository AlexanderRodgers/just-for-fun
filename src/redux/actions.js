import { TO_HOME, TO_SIGNUP, TO_LOGIN } from './actionTypes';

export const toSignup = () => {
  return {
    type: TO_SIGNUP
  };
};

export const toLogin = () => {
  return {
    type: TO_LOGIN
  };
};

export const toHome = () => {
  return {
    type: TO_HOME
  };
};