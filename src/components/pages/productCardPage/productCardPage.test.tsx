import { screen } from '@testing-library/react';

import { ProductCardPage } from 'components/pages/productCardPage';
import { ROUTES, TEXT, TEST_ID } from 'constants/index';
import { commonInitialState, withRouterParamsAndRedux } from 'mocks/mock';
import { dataMapCustomProducts } from 'mocks/mockData';

const PRODUCT_ROUTE = '/5';
const PATH_PARAMS = ROUTES.productId;
const TESTED_PRODUCT_DATA = dataMapCustomProducts['5'];
const { text } = TEXT.customDesign;
const { price } = TEST_ID.productCardPage;
const { loader } = TEST_ID.common;

describe('ProductCardPage', () => {
  const INIT_STATE = {
    ...commonInitialState,
    products: {
      ...commonInitialState.products,
      productsMap: dataMapCustomProducts,
    },
  };

  test('render loader', () => {
    const INIT_STATE_WITH_LOADER = {
      ...commonInitialState,
      products: {
        ...commonInitialState.products,
        isLoadingCurrentProduct: true,
      },
    };

    withRouterParamsAndRedux(
      <ProductCardPage />,
      INIT_STATE_WITH_LOADER,
      PRODUCT_ROUTE,
      PATH_PARAMS
    );

    expect(screen.getByTestId(loader)).toBeInTheDocument();
  });

  test('render title', () => {
    withRouterParamsAndRedux(<ProductCardPage />, INIT_STATE, PRODUCT_ROUTE, PATH_PARAMS);

    expect(screen.getByText(TESTED_PRODUCT_DATA.title)).toBeInTheDocument();
  });

  test('render description abstract', () => {
    withRouterParamsAndRedux(<ProductCardPage />, INIT_STATE, PRODUCT_ROUTE, PATH_PARAMS);

    expect(
      screen.getByText(TESTED_PRODUCT_DATA.description.split('. ').slice(0, 3).join('. '))
    ).toBeInTheDocument();
  });

  test('render description', () => {
    withRouterParamsAndRedux(<ProductCardPage />, INIT_STATE, PRODUCT_ROUTE, PATH_PARAMS);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('render price', () => {
    withRouterParamsAndRedux(<ProductCardPage />, INIT_STATE, PRODUCT_ROUTE, PATH_PARAMS);

    expect(screen.getByTestId(price)).toBeInTheDocument();
  });
});
