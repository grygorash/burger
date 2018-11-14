import { FETCH_LOCAL_SUCCESS, FETCH_SUCCESS } from '../actionTypes';

export const initialState = {
  burgers: [],
  loaded: false
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        burgers: action.burgers,
        loaded: true
      };

    case FETCH_LOCAL_SUCCESS:
      return {
        ...state,
        burgers: action.burgers,
        loaded: true
      };
    default:
      return state;
  }
}