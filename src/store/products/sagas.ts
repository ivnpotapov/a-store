import { AnyAction } from '@reduxjs/toolkit';
import { takeLatest, call, put } from 'redux-saga/effects';

import { TEXT } from 'constants/index';
import { getMadeInAlfa, getProductById, getYourDesign } from 'services/productServices';
import { notificationsActions } from 'store/notifications';
import { CurrentProduct, ProductExtend, ProductGroup } from 'types/products';

const { errorFetchText } = TEXT.notes;

import { productsActions } from './';

export function* getProductsAlfaMadeSaga() {
  try {
    const productsList: ProductExtend[] = yield call(getMadeInAlfa);

    yield put(productsActions.setProductsAlfaMade(productsList));
  } catch (e) {
    yield put(productsActions.failureAlfaMade());
    yield put(notificationsActions.error({ title: errorFetchText }));
  }
}

export function* getProductsGroupSaga() {
  try {
    const productsList: ProductGroup[] = yield call(getYourDesign);

    yield put(productsActions.setProductsGroup(productsList));
  } catch (e) {
    yield put(productsActions.failureGroup());
    yield put(notificationsActions.error({ title: errorFetchText }));
  }
}

export function* getCurrentProductSaga(action: AnyAction) {
  try {
    const product: CurrentProduct = yield call(getProductById, action.payload);

    if (!Boolean(product)) {
      yield put(productsActions.setEmptyCurrentProduct());
      yield put(productsActions.failureCurrentProduct());
      yield put(notificationsActions.error({ title: errorFetchText }));
    } else {
      yield put(productsActions.setCurrentProduct(product));
    }
  } catch (e) {
    yield put(productsActions.failureCurrentProduct());
    yield put(notificationsActions.error({ title: errorFetchText }));
  }
}

export function* watchProductsSaga() {
  yield takeLatest(productsActions.requestAlfaMade, getProductsAlfaMadeSaga);
  yield takeLatest(productsActions.requestGroup, getProductsGroupSaga);
  yield takeLatest(productsActions.requestCurrentProduct, getCurrentProductSaga);
}
