import {combineReducers} from 'redux';

import authReducer from './commonActions/Auth/Auth.reducer';
import userLocationReducer from './commonActions/Location/Location.Reducer';

const appReducer = combineReducers({
  auth: authReducer,
  userLocation: userLocationReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
