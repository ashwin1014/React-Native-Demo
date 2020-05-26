import {USER_LOGGED_IN} from './Auth.types';

const INIT_STATE = {
  isAuthenticated: false,
};

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
      };

    default:
      return state;
  }
}
