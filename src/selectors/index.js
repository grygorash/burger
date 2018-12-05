import { createSelector } from 'reselect';

const getCart = state => state.cart;
const getConstructor = state => state.burgersConstructor;

export const getCartSum = createSelector(getCart, burger => {
  let sum = 0;
  burger.map(burger => sum += burger.totalPrice);
  return sum;
});

export const getConstructorSum = createSelector(getConstructor, ingredient => {
  let sum = 0;
  Object.values(ingredient).map(type => type.map(price => sum += price.price));
  return sum;
});
