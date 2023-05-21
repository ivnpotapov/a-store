import { cloneableGenerator } from '@redux-saga/testing-utils';
import { Saga } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { TEXT } from 'constants/index';
import { dataExtend, dataGroups } from 'mocks/mockData';
import { getMadeInAlfa, getProductById, getYourDesign } from 'services/productServices';
import { notificationsActions } from 'store/notifications';
import {
  getProductsAlfaMadeSaga,
  getProductsGroupSaga,
  getCurrentProductSaga,
  productsActions,
} from 'store/products';

const { products } = dataExtend;
const { groups } = dataGroups;
const ERROR_MESSAGE = 'errorMessage';
const { errorFetchText } = TEXT.notes;

describe('getProductsAlfaMadeSaga', () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const genInstance = cloneableGenerator(getProductsAlfaMadeSaga as Saga<any[]>)();

  test('getProductsAlfaMadeSaga success', () => {
    const gClone = genInstance.clone();

    expect(gClone.next().value).toEqual(call(getMadeInAlfa));

    const setProductAction = productsActions.setProductsAlfaMade(products);
    expect(gClone.next(products).value).toEqual(put(setProductAction));

    expect(gClone.next().done).toEqual(true);
  });

  test('getProductsAlfaMadeSaga error', () => {
    const gClone = genInstance.clone();

    gClone.next();

    const res =
      gClone.throw &&
      gClone.throw({
        message: ERROR_MESSAGE,
      }).value;

    expect(res).toEqual(put(productsActions.failureAlfaMade()));

    const notificationAction = notificationsActions.error({
      title: errorFetchText,
    });
    const resNotifications = gClone.next(notificationAction).value;

    expect(resNotifications).toEqual(put(notificationAction));

    expect(gClone.next().done).toEqual(true);
  });
});

describe('getProductsGroupSaga', () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const genInstance = cloneableGenerator(getProductsGroupSaga as Saga<any[]>)();

  test('getProductsGroupSaga success', () => {
    const gClone = genInstance.clone();

    expect(gClone.next().value).toEqual(call(getYourDesign));

    const setGroupsAction = productsActions.setProductsGroup(groups);

    expect(gClone.next(groups).value).toEqual(put(setGroupsAction));

    expect(gClone.next().done).toEqual(true);
  });

  test('getProductsGroupSaga error', () => {
    const gClone = genInstance.clone();

    gClone.next();

    const res =
      gClone.throw &&
      gClone.throw({
        message: ERROR_MESSAGE,
      }).value;

    expect(res).toEqual(put(productsActions.failureGroup()));

    const notificationAction = notificationsActions.error({
      title: errorFetchText,
    });
    const resNotifications = gClone.next(notificationAction).value;

    expect(resNotifications).toEqual(put(notificationAction));

    expect(gClone.next().done).toEqual(true);
  });
});

describe('getCurrentProductSaga', () => {
  const reqCurrentProductAction = productsActions.requestCurrentProduct('1');
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const genInstance = cloneableGenerator(getCurrentProductSaga as Saga<any[]>)(
    reqCurrentProductAction
  );

  test('getCurrentProductSaga success with data', () => {
    const gClone = genInstance.clone();

    expect(gClone.next().value).toEqual(call(getProductById, '1'));

    const setCurrentProductAction = productsActions.setCurrentProduct(products[1]);

    expect(gClone.next(products[1]).value).toEqual(put(setCurrentProductAction));

    expect(gClone.next().done).toEqual(true);
  });

  test('getCurrentProductSaga success without data', () => {
    const reqCurrentProductAction = productsActions.requestCurrentProduct('42');
    const genInstance = getCurrentProductSaga(reqCurrentProductAction);

    expect(genInstance.next().value).toEqual(call(getProductById, '42'));

    const setCurrentProductAction = productsActions.setEmptyCurrentProduct();
    expect(genInstance.next().value).toEqual(put(setCurrentProductAction));

    const setFailureAction = productsActions.failureCurrentProduct();
    expect(genInstance.next().value).toEqual(put(setFailureAction));

    const notificationAction = notificationsActions.error({
      title: errorFetchText,
    });
    const resNotifications = genInstance.next().value;
    expect(resNotifications).toEqual(put(notificationAction));

    expect(genInstance.next().done).toEqual(true);
  });

  test('getCurrentProductSaga error', () => {
    const gClone = genInstance.clone();

    gClone.next();

    const res =
      gClone.throw &&
      gClone.throw({
        message: ERROR_MESSAGE,
      }).value;

    expect(res).toEqual(put(productsActions.failureCurrentProduct()));

    const notificationAction = notificationsActions.error({
      title: errorFetchText,
    });
    const resNotifications = gClone.next(notificationAction).value;

    expect(resNotifications).toEqual(put(notificationAction));

    expect(gClone.next().done).toEqual(true);
  });
});
