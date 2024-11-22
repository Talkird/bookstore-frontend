import { store } from '../redux/store';

export const getToken = () => {
  return store.getState().user.token;
};

export const getRole = () => {
  return store.getState().user.role;
};

export const getEmail = () => {
  return store.getState().user.email;
};

export const getUserId = () => {
  return store.getState().user.userId;
};

export const isLoggedIn = () => {
  return getToken() !== null;
};

export const clearLocalStorage = () => {
  store.dispatch(logout());
};
