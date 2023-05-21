import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FormProduct } from 'components/pages/productCardPage/formProduct';
import { colorMapEnRu } from 'constants/colors';
import { ROUTES, TEXT, FORM_PRODUCT } from 'constants/index';
import { commonInitialState, withRouterParamsAndRedux } from 'mocks/mock';
import { dataMapCustomProducts } from 'mocks/mockData';

const PRODUCT_ROUTE = '/5';
const PATH_PARAMS = ROUTES.productId;
const TESTED_PRODUCT_DATA = dataMapCustomProducts['5'];
const { buttonSubmit } = TEXT.productCardPage;

describe('FormProduct', () => {
  const INIT_STATE = {
    ...commonInitialState,
    products: {
      ...commonInitialState.products,
      currentProduct: TESTED_PRODUCT_DATA,
    },
  };

  test('render buttonSubmit', () => {
    withRouterParamsAndRedux(<FormProduct />, INIT_STATE, PRODUCT_ROUTE, PATH_PARAMS);

    expect(screen.getByText(buttonSubmit)).toBeInTheDocument();
  });

  test('render colorSelector', () => {
    withRouterParamsAndRedux(<FormProduct />, INIT_STATE, PRODUCT_ROUTE, PATH_PARAMS);

    expect(screen.getByText(FORM_PRODUCT.colors.inputLabel)).toBeInTheDocument();
    expect(screen.getByText(colorMapEnRu.white)).toBeInTheDocument();
  });

  test('change color', async () => {
    withRouterParamsAndRedux(<FormProduct />, INIT_STATE, PRODUCT_ROUTE, PATH_PARAMS);

    expect(screen.getByText(colorMapEnRu.white)).toBeInTheDocument();

    await userEvent.click(screen.getByText(colorMapEnRu.white));

    expect(screen.getByText(colorMapEnRu.red)).toBeInTheDocument();
    expect(screen.getByText(colorMapEnRu.black)).toBeInTheDocument();

    await userEvent.click(screen.getByText(colorMapEnRu.red));

    expect(screen.getByText(colorMapEnRu.red)).toBeInTheDocument();
    expect(screen.queryByText(colorMapEnRu.black)).toBeNull();
    expect(screen.queryByText(colorMapEnRu.white)).toBeNull();
  });

  test('render sizeSelector', () => {
    withRouterParamsAndRedux(<FormProduct />, INIT_STATE, PRODUCT_ROUTE, PATH_PARAMS);

    expect(screen.getByText(FORM_PRODUCT.sizes.inputLabel)).toBeInTheDocument();
    expect(screen.getByText(TESTED_PRODUCT_DATA.sizes[0])).toBeInTheDocument();
  });

  test('change size', async () => {
    withRouterParamsAndRedux(<FormProduct />, INIT_STATE, PRODUCT_ROUTE, PATH_PARAMS);

    expect(screen.getByText(TESTED_PRODUCT_DATA.sizes[0])).toBeInTheDocument();

    await userEvent.click(screen.getByText(TESTED_PRODUCT_DATA.sizes[0]));

    expect(screen.getByText(TESTED_PRODUCT_DATA.sizes[1])).toBeInTheDocument();
    expect(screen.getByText(TESTED_PRODUCT_DATA.sizes[2])).toBeInTheDocument();

    await userEvent.click(screen.getByText(TESTED_PRODUCT_DATA.sizes[1]));

    expect(screen.getByText(TESTED_PRODUCT_DATA.sizes[1])).toBeInTheDocument();
    expect(screen.queryByText(TESTED_PRODUCT_DATA.sizes[0])).toBeNull();
    expect(screen.queryByText(TESTED_PRODUCT_DATA.sizes[2])).toBeNull();
  });

  test('render stickerSelector', () => {
    withRouterParamsAndRedux(<FormProduct />, INIT_STATE, PRODUCT_ROUTE, PATH_PARAMS);

    expect(screen.getByText(FORM_PRODUCT.sizes.inputLabel)).toBeInTheDocument();
    expect(screen.getByText(TESTED_PRODUCT_DATA.stickerNumbers[0])).toBeInTheDocument();
  });

  test('change stiker', async () => {
    withRouterParamsAndRedux(<FormProduct />, INIT_STATE, PRODUCT_ROUTE, PATH_PARAMS);

    expect(screen.getByText(TESTED_PRODUCT_DATA.stickerNumbers[0])).toBeInTheDocument();

    await userEvent.click(screen.getByText(TESTED_PRODUCT_DATA.stickerNumbers[0]));

    expect(screen.getByText(TESTED_PRODUCT_DATA.stickerNumbers[1])).toBeInTheDocument();
    expect(screen.getByText(TESTED_PRODUCT_DATA.stickerNumbers[2])).toBeInTheDocument();

    await userEvent.click(screen.getByText(TESTED_PRODUCT_DATA.stickerNumbers[1]));

    expect(screen.getByText(TESTED_PRODUCT_DATA.stickerNumbers[1])).toBeInTheDocument();
    expect(screen.queryByText(TESTED_PRODUCT_DATA.stickerNumbers[0])).toBeNull();
    expect(screen.queryByText(TESTED_PRODUCT_DATA.stickerNumbers[2])).toBeNull();
  });

  test('change model', async () => {
    const INIT_STATE_WITH_MODEL = {
      ...commonInitialState,
      products: {
        ...commonInitialState.products,
        currentProduct: dataMapCustomProducts[3],
      },
    };

    withRouterParamsAndRedux(<FormProduct />, INIT_STATE_WITH_MODEL, PRODUCT_ROUTE, PATH_PARAMS);

    expect(screen.getByText(dataMapCustomProducts[3].models[0])).toBeInTheDocument();

    await userEvent.click(screen.getByText(dataMapCustomProducts[3].models[0]));

    expect(screen.getByText(dataMapCustomProducts[3].models[1])).toBeInTheDocument();
    expect(screen.getByText(dataMapCustomProducts[3].models[2])).toBeInTheDocument();

    await userEvent.click(screen.getByText(dataMapCustomProducts[3].models[1]));

    expect(screen.getByText(dataMapCustomProducts[3].models[1])).toBeInTheDocument();
    expect(screen.queryByText(dataMapCustomProducts[3].models[0])).toBeNull();
    expect(screen.queryByText(dataMapCustomProducts[3].models[2])).toBeNull();
  });

  test('change cart state', async () => {
    const { store } = withRouterParamsAndRedux(
      <FormProduct />,
      INIT_STATE,
      PRODUCT_ROUTE,
      PATH_PARAMS
    );

    await userEvent.click(screen.getByText(colorMapEnRu.white));
    await userEvent.click(screen.getByText(colorMapEnRu.red));

    await userEvent.click(screen.getByText(TESTED_PRODUCT_DATA.sizes[0]));
    await userEvent.click(screen.getByText(TESTED_PRODUCT_DATA.sizes[1]));

    await userEvent.click(screen.getByText(TESTED_PRODUCT_DATA.stickerNumbers[0]));
    await userEvent.click(screen.getByText(TESTED_PRODUCT_DATA.stickerNumbers[1]));
    await userEvent.click(screen.getByText(buttonSubmit));

    const cartList = store.getState().cart.cartList;
    const cartListKeys = Object.keys(cartList);
    const cartItem = cartList[cartListKeys[0]];

    expect(cartListKeys.length === 1).toBeTruthy();

    expect(cartItem.title === TESTED_PRODUCT_DATA.title).toBeTruthy();
    expect(cartItem.count === 1).toBeTruthy();
    expect(cartItem.size === TESTED_PRODUCT_DATA.sizes[1]).toBeTruthy();
    expect(cartItem.stickerNumber === String(TESTED_PRODUCT_DATA.stickerNumbers[1])).toBeTruthy();
  });
});
