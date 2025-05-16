import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_CATEGORIES, SET_CATEGORIES, SET_CATEGORIES_ERROR } from './types';
import categoryApi from '../../api/categoryApi';

function* fetchCategoriesSaga() {
  try {
    console.log('Saga: Starting FETCH_CATEGORIES');  // log when saga starts

    const categories = yield call(categoryApi.fetchAll);
    console.log('Saga: Fetched categories from API:', categories);  // log API result

    yield put({ type: SET_CATEGORIES, payload: categories });
    console.log('Saga: Dispatched SET_CATEGORIES with payload:', categories);  // log dispatch

  } catch (error) {
    console.error('Saga: Failed to fetch categories:', error);
    yield put({ type: SET_CATEGORIES_ERROR, payload: error.message });
  }
}

export default function* categorySaga() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategoriesSaga);
}






// redux/category/sagas.js

/*import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_CATEGORIES, SET_CATEGORIES, SET_CATEGORIES_ERROR } from './types';
import categoryApi from '../../api/categoryApi'; // Assuming you have this API function

// Saga to handle category fetching
function* fetchCategoriesSaga() {
  try {
    console.log('Saga: Starting FETCH_CATEGORIES');  // log when saga starts

    // Fetch categories from the API (replace with your actual API method)
    const categories = yield call(categoryApi.fetchAll);
    console.log('Saga: Fetched categories from API:', categories);  // log API result

    // Dispatch the action to store categories in Redux state
    yield put({ type: SET_CATEGORIES, payload: categories });
    console.log('Saga: Dispatched SET_CATEGORIES with payload:', categories);  // log dispatch

  } catch (error) {
    console.error('Saga: Failed to fetch categories:', error);
    // Dispatch action to set the error in case of failure
    yield put({ type: SET_CATEGORIES_ERROR, payload: error.message });
  }
}

export default function* categorySaga() {
  // Listen for FETCH_CATEGORIES action to trigger the saga
  yield takeLatest(FETCH_CATEGORIES, fetchCategoriesSaga);
}
*/