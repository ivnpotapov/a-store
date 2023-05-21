import { PersistState } from 'redux-persist';

import { commonInitialState } from 'mocks/mock';
import { dataExtend, dataGroups } from 'mocks/mockData';
import {
  currentProductSelector,
  productByIdSelector,
  productImgSelector,
  productsAlfaMadeSelector,
  productsGroupSelector,
} from 'store/products';

describe('products selectors', () => {
  const PRODUCT_TEST = dataExtend.products[0];

  test('productsAlfaMadeSelector', () => {
    const INIT_STATE = {
      ...commonInitialState,
      _persist: {} as PersistState,
      products: {
        ...commonInitialState.products,
        productsAlfaMade: dataExtend.products,
      },
    };
    expect(productsAlfaMadeSelector(INIT_STATE)).toEqual(dataExtend.products);
  });

  test('productsGroupSelector', () => {
    const INIT_STATE = {
      ...commonInitialState,
      _persist: {} as PersistState,
      products: {
        ...commonInitialState.products,
        productsGroup: dataGroups.groups,
      },
    };
    expect(productsGroupSelector(INIT_STATE)).toEqual(dataGroups.groups);
  });

  test('currentProductSelector', () => {
    const INIT_STATE = {
      ...commonInitialState,
      _persist: {} as PersistState,
      products: {
        ...commonInitialState.products,
        currentProduct: PRODUCT_TEST,
      },
    };
    expect(currentProductSelector(INIT_STATE)).toEqual(PRODUCT_TEST);
  });

  test('productImgSelector', () => {
    const INIT_STATE = {
      ...commonInitialState,
      _persist: {} as PersistState,
      products: {
        ...commonInitialState.products,
        productImg: PRODUCT_TEST.images[0],
      },
    };
    expect(productImgSelector(INIT_STATE)).toEqual(PRODUCT_TEST.images[0]);
  });

  test('productByIdSelector', () => {
    const INIT_STATE = {
      ...commonInitialState,
      _persist: {} as PersistState,
      products: {
        ...commonInitialState.products,
        productsMap: { '0': PRODUCT_TEST },
      },
    };
    expect(productByIdSelector(INIT_STATE, '0')).toEqual(PRODUCT_TEST);
  });
});
