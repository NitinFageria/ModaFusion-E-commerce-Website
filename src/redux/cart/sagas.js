import { takeLatest, put, call } from 'redux-saga/effects';
import { APPLY_COUPON } from './types';
import { applyCoupon } from './actions';

// Simulated API call (replace with real API later)
function fakeCouponApi(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (code === 'DISCOUNT10') {
        resolve({ discount: 0.1 });
      } else {
        reject(new Error('Invalid coupon code'));
      }
    }, 1000);
  });
}

function* handleApplyCoupon(action) {
  try {
    const result = yield call(fakeCouponApi, action.payload);
    // Dispatch success action if needed
    yield put(applyCoupon(action.payload));
    console.log(`Coupon applied: ${result.discount * 100}% off`);
  } catch (error) {
    console.error('Coupon apply failed:', error.message);
    // You can dispatch a failure action here if you want
  }
}

export default function* cartSaga() {
  yield takeLatest(APPLY_COUPON, handleApplyCoupon);
}
