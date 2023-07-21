import {ADD_TO_CART, REMOVE_TO_CART} from './constant';

export const AddToCart = item => ({
  type: ADD_TO_CART,
  data: item,
});

export const RemoveToCart = item => ({
  type: REMOVE_TO_CART,
  data: item,
});
