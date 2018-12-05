import {
  ADD_TO_CART,
  CLEAN_CART,
  CONSTRUCTOR_NEXT,
  CONSTRUCTOR_PREV,
  FEEDBACK_TEL,
  FETCH_FAILURE,
  FETCH_LOCAL_SUCCESS,
  FETCH_START,
  FETCH_SUCCESS,
  INGREDIENT_ADD, INGREDIENT_REMOVE,
  MODAL_CLOSE,
  MODAL_OPEN,
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

export const addToCart = (burger, pathname) => {
  return {
    type: ADD_TO_CART,
    burger,
    pathname
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

export const constructorNext = () => {
  return {
    type: CONSTRUCTOR_NEXT
  };
};

export const constructorPrev = () => {
  return {
    type: CONSTRUCTOR_PREV
  };
};

export const ingredientAdd = (ingredient, ingredientName) => {
  return {
    type: INGREDIENT_ADD,
    ingredient,
    ingredientName
  };
};

export const ingredientRemove = (ingredient, ingredientName) => {
  return {
    type: INGREDIENT_REMOVE,
    ingredient,
    ingredientName
  };
};