import {combineReducers} from 'redux';

import authReducer from './commonActions/Auth/Auth.reducer';

const appReducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
