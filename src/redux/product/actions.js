import {
    FETCH_PRODUCTS,
    FETCH_PRODUCT_DETAIL,
  } from './types';
  
  export const fetchProducts = () => ({
    type: FETCH_PRODUCTS,
  });
  
  export const fetchProductDetail = (id) => ({
    type: FETCH_PRODUCT_DETAIL,
    payload: id,
  });
  