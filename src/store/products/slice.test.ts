import { dataExtend } from 'mocks/mockData';
import { productsReducer, productsActions, productsInitialState } from 'store/products';

describe('products slice', () => {
  const PRODUCT_TEST = dataExtend.products[0];

  test('failureAlfaMade', () => {
    expect(productsReducer(productsInitialState, productsActions.failureAlfaMade())).toEqual({
      ...productsInitialState,
      isLoadingAlfaMade: false,
      hasErrorAlfaMade: true,
    });
  });

  test('failureGroup', () => {
    expect(productsReducer(productsInitialState, productsActions.failureGroup())).toEqual({
      ...productsInitialState,
      isLoadingGroup: false,
      hasErrorGroup: true,
    });
  });

  test('requestCurrentProduct', () => {
    expect(
      productsReducer(productsInitialState, productsActions.requestCurrentProduct('1'))
    ).toEqual({
      ...productsInitialState,
      isLoadingCurrentProduct: true,
      hasErrorCurrentProduct: false,
    });
  });

  test('setEmptyCurrentProduct', () => {
    expect(productsReducer(productsInitialState, productsActions.setEmptyCurrentProduct())).toEqual(
      {
        ...productsInitialState,
        isEmptyCurrentProduct: true,
      }
    );
  });

  test('resetEmptyCurrentProduct', () => {
    expect(
      productsReducer(productsInitialState, productsActions.resetEmptyCurrentProduct())
    ).toEqual({
      ...productsInitialState,
      isEmptyCurrentProduct: false,
    });
  });

  test('setCurrentProduct', () => {
    expect(
      productsReducer(productsInitialState, productsActions.setCurrentProduct(PRODUCT_TEST))
    ).toEqual({
      ...productsInitialState,
      currentProduct: PRODUCT_TEST,
      productImg: PRODUCT_TEST.images[0],
      productsMap: { '0': PRODUCT_TEST },
    });
  });

  test('failureCurrentProduct', () => {
    expect(productsReducer(productsInitialState, productsActions.failureCurrentProduct())).toEqual({
      ...productsInitialState,
      isLoadingCurrentProduct: false,
      hasErrorCurrentProduct: true,
    });
  });

  test('setProductImg', () => {
    expect(
      productsReducer(productsInitialState, productsActions.setProductImg(PRODUCT_TEST.images[0]))
    ).toEqual({
      ...productsInitialState,
      productImg: PRODUCT_TEST.images[0],
    });
  });
});
