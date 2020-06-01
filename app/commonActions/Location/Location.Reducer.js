import {SET_CURRENT_LOCATION} from './Location.Types';

const INIT_STATE = {
  selectedLocation: null,
};

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_LOCATION:
      return {
        ...state,
        selectedLocation: action.payload.location,
      };

    default:
      return state;
  }
}
