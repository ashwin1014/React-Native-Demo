import {USER_LOGGED_IN} from './Auth.types';

export const setAuthentication = isAuthenticated => dispatch => {
  return dispatch({
    type: USER_LOGGED_IN,
    payload: {
      isAuthenticated,
    },
  });
};
