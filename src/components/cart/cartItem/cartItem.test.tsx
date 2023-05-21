import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TEST_ID } from 'constants/index';
import { commonInitialState, withRouterAndRedux } from 'mocks/mock';
import { cartMock } from 'mocks/mockData';
import { getCartLabels, getNumberWithSpace } from 'utils';

import { CartItem } from './';

const key = Object.keys(cartMock)[0];
const { title, count, price, color, size, stickerNumber, model } = cartMock[key];

const START_SUM = getNumberWithSpace(count * price);
const INCREASED_SUM = getNumberWithSpace((count + 1) * price);
const DECREASED_SUM = getNumberWithSpace((count - 1) * price);

const { decreaseCount, increaseCount, removeButton } = TEST_ID.cart;

const { colorText, sizeText, stickerText, modelText } = getCartLabels(
  color,
  size,
  stickerNumber,
  model
);

describe('CartItem', () => {
  test('render CartItem', () => {
    const INIT_STATE = {
      ...commonInitialState,
      cart: { ...commonInitialState.cart, cartList: cartMock },
    };

    withRouterAndRedux(<CartItem id={key} />, INIT_STATE);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(count)).toBeInTheDocument();
    expect(screen.getByText(START_SUM)).toBeInTheDocument();
    expect(screen.getByText(colorText)).toBeInTheDocument();
    expect(screen.getByText(sizeText)).toBeInTheDocument();
    expect(screen.getByText(stickerText)).toBeInTheDocument();
    expect(screen.getByText(modelText)).toBeInTheDocument();
  });

  test('increase counter', async () => {
    const INIT_STATE = {
      ...commonInitialState,
      cart: { ...commonInitialState.cart, cartList: cartMock },
    };

    withRouterAndRedux(<CartItem id={key} />, INIT_STATE);

    expect(screen.getByText(count)).toBeInTheDocument();
    expect(screen.getByText(START_SUM)).toBeInTheDocument();

    await userEvent.click(screen.getByTestId(increaseCount));

    expect(screen.getByText(count + 1)).toBeInTheDocument();
    expect(screen.getByText(INCREASED_SUM)).toBeInTheDocument();
  });

  test('decrease counter', async () => {
    const INIT_STATE = {
      ...commonInitialState,
      cart: { ...commonInitialState.cart, cartList: cartMock },
    };

    withRouterAndRedux(<CartItem id={key} />, INIT_STATE);

    expect(screen.getByText(count)).toBeInTheDocument();
    expect(screen.getByText(START_SUM)).toBeInTheDocument();

    await userEvent.click(screen.getByTestId(decreaseCount));

    expect(screen.getByText(count - 1)).toBeInTheDocument();
    expect(screen.getByText(DECREASED_SUM)).toBeInTheDocument();
  });

  test('remove product', async () => {
    const INIT_STATE = {
      ...commonInitialState,
      cart: { ...commonInitialState.cart, cartList: cartMock },
    };

    const { store } = withRouterAndRedux(<CartItem id={key} />, INIT_STATE);

    expect(screen.getByText(count)).toBeInTheDocument();
    expect(screen.getByText(START_SUM)).toBeInTheDocument();

    await userEvent.click(screen.getByTestId(removeButton));

    expect(store.getState().cart.cartList[key]).toBeUndefined();
    expect(screen.queryByText(count)).toBeNull();
    expect(screen.queryByText(START_SUM)).toBeNull();
  });
});
