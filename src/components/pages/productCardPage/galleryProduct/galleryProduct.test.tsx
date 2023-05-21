import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { GalleryProduct } from 'components/pages/productCardPage/galleryProduct';
import { ROUTES, TEST_ID } from 'constants/index';
import { commonInitialState, withRouterParamsAndRedux } from 'mocks/mock';
import { dataMapCustomProducts } from 'mocks/mockData';

const PRODUCT_ROUTE = '/5';
const PATH_PARAMS = ROUTES.productId;
const TESTED_PRODUCT_DATA = dataMapCustomProducts['5'];
const { bigImg, preview } = TEST_ID.productCardPage;

describe('GalleryProduct', () => {
  const INIT_STATE = {
    ...commonInitialState,
    products: {
      ...commonInitialState.products,
      currentProduct: TESTED_PRODUCT_DATA,
      productImg: TESTED_PRODUCT_DATA.preview,
    },
  };

  test('render big img', () => {
    withRouterParamsAndRedux(<GalleryProduct />, INIT_STATE, PRODUCT_ROUTE, PATH_PARAMS);

    expect(screen.getByTestId(bigImg)).toBeInTheDocument();
  });

  test('render previews', () => {
    withRouterParamsAndRedux(<GalleryProduct />, INIT_STATE, PRODUCT_ROUTE, PATH_PARAMS);

    expect(
      screen.getAllByTestId(TEST_ID.productCardPage.preview).length ===
        TESTED_PRODUCT_DATA.images.length
    ).toBeTruthy();
    expect(
      screen.getAllByTestId(preview)[2].getAttribute('src') === TESTED_PRODUCT_DATA.images[2]
    ).toBeTruthy();
  });

  test('change big img', async () => {
    withRouterParamsAndRedux(<GalleryProduct />, INIT_STATE, PRODUCT_ROUTE, PATH_PARAMS);

    expect(
      screen.getByTestId(TEST_ID.productCardPage.bigImg).getAttribute('src') ===
        TESTED_PRODUCT_DATA.preview
    ).toBeTruthy();

    await userEvent.click(screen.getAllByTestId(TEST_ID.productCardPage.preview)[3]);

    expect(
      screen.getByTestId(TEST_ID.productCardPage.bigImg).getAttribute('src') ===
        TESTED_PRODUCT_DATA.images[3]
    ).toBeTruthy();
  });
});
