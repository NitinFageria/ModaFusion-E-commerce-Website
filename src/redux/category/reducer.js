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




/*
  import {
    FETCH_CATEGORIES,
    SET_CATEGORIES,
    SET_CATEGORIES_ERROR,
  } from './types';
  
  const initialState = {
    categories: [],
    loading: false,
    error: null,
  };
  
  export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_CATEGORIES:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SET_CATEGORIES:
        return {
          ...state,
          categories: action.payload,
          loading: false,
          error: null,
        };
      case SET_CATEGORIES_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  */