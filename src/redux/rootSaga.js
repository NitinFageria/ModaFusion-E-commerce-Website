import { all } from "redux-saga/effects";
import productSaga from "./product/sagas";
import categorySaga from "./category/sagas";  // ✅ make sure this import is here

export default function* rootSaga() {
  yield all([
    productSaga(),
    categorySaga(),  // ✅ include this so category sagas run
  ]);
}
