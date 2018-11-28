import { createSelector } from 'reselect';

const getCart = state => state.cart;

export const getCartSum = createSelector(getCart, burger => {
  let sum = 0;
  burger.map(burger => sum += burger.totalPrice);
  return sum;
});
