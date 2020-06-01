import {SET_CURRENT_LOCATION} from './Location.Types';

export const setSelectedLocation = location => dispatch => {
  return dispatch({
    type: SET_CURRENT_LOCATION,
    payload: {
      location,
    },
  });
};
