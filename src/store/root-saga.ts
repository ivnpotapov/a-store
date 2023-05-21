import { fork } from 'redux-saga/effects';

import { watchProductsSaga } from 'store/products';

export function* rootSaga() {
  yield fork(watchProductsSaga);
}
