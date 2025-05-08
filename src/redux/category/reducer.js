import {
    SET_CATEGORIES,
    SET_CATEGORIES_ERROR,
  } from './types';
  
  const initialState = {
    categories: [],
    error: null,
  };
  
  export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
      case SET_CATEGORIES:
        return {
          ...state,
          categories: action.payload,
          error: null,
        };
      case SET_CATEGORIES_ERROR:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  