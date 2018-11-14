import { FETCH_FAILURE, FETCH_LOCAL_SUCCESS, FETCH_START, FETCH_SUCCESS } from '../actionTypes';
import { initialState } from '../reducers';

export const fetchInitialState = () => async dispatch => {
  dispatch({type: FETCH_START});

  try {
    if (!localStorage.getItem('boards')) {
      dispatch({
                 type: FETCH_SUCCESS,
                 ...initialState
               });
    } else {
      dispatch({
                 type: FETCH_LOCAL_SUCCESS,
                 boards: JSON.parse(localStorage.getItem('burgers')),
               });
    }
  }
  catch (err) {
    dispatch({
               type: FETCH_FAILURE,
               payload: err,
               error: true
             });
  }
};