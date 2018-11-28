import {
  ADD_TO_CART,
  CLEAN_CART,
  FEEDBACK_TEL,
  FETCH_FAILURE,
  FETCH_LOCAL_SUCCESS,
  FETCH_START,
  FETCH_SUCCESS, MODAL_CLOSE, MODAL_OPEN,
  REMOVE_FROM_CART
} from '../actionTypes';
import { initialState } from '../reducers';

export const fetchInitialState = () => async dispatch => {
  dispatch({type: FETCH_START});

  try {
    if (!localStorage.getItem('cart')) {
      dispatch({
                 type: FETCH_SUCCESS,
                 ...initialState
               });
    } else {
      dispatch({
                 type: FETCH_LOCAL_SUCCESS,
                 burgers: initialState.burgers,
                 ingredients: initialState.ingredients,
                 cart: JSON.parse(localStorage.getItem('cart'))
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

export const addToCart = (burger) => {
  return {
    type: ADD_TO_CART,
    burger
  };
};

export const removeFromCart = (burger) => {
  return {
    type: REMOVE_FROM_CART,
    burger
  };
};

export const modalOpen = (modal) => {
  return {
    type: MODAL_OPEN,
    modal
  };
};

export const modalClose = (modal) => {
  return {
    type: MODAL_CLOSE,
    modal
  };
};

export const feedbackTel = (tel) => {
  return {
    type: FEEDBACK_TEL,
    tel
  };
};

export const cleanCart = (burger) => {
  return {
    type: CLEAN_CART,
    burger
  };
};