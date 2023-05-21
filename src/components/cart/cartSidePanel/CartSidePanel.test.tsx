import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CartSidePanel } from 'components/cart/cartSidePanel';
import { TEXT } from 'constants/index';
import { commonInitialState, withRouterAndRedux } from 'mocks/mock';
import { cartMock } from 'mocks/mockData';
import { getCartLabels, getNumberWithSpace } from 'utils';

const [key5] = Object.keys(cartMock);

const FIVE = cartMock[key5];

const price = Object.keys(cartMock).reduce((acc, el) => {
  const { count, price } = cartMock[el];
  acc += price * count;
  return acc;
}, 0);

const PRICE = getNumberWithSpace(price);

const { buttonNextText, sumText, sidePanelTitle } = TEXT.cart;

jest.setTimeout(15000);

describe('cart side panel', () => {
  const INIT_STATE = {
    ...commonInitialState,
    cart: {
      ...commonInitialState.cart,
      isCartOpen: true,
      cartList: cartMock,
      totalPrice: price,
    },
  };

  test('render CartSidePanel text', () => {
    withRouterAndRedux(<CartSidePanel />, INIT_STATE);

    expect(screen.getByText(sidePanelTitle)).toBeInTheDocument();
    expect(screen.getByText(`${sumText}:`)).toBeInTheDocument();
    expect(screen.getByText(buttonNextText)).toBeInTheDocument();
    expect(screen.getByText(PRICE)).toBeInTheDocument();
  });

  test('render product list', () => {
    withRouterAndRedux(<CartSidePanel />, INIT_STATE);

    expect(screen.getByText(FIVE.title)).toBeInTheDocument();
    expect(screen.getByText(FIVE.count)).toBeInTheDocument();
    expect(screen.getByAltText(FIVE.title)).toBeInTheDocument();
    const price5 = FIVE.count * FIVE.price;
    expect(screen.getByText(getNumberWithSpace(price5))).toBeInTheDocument();
    const { colorText, sizeText, stickerText } = getCartLabels(
      FIVE.color,
      FIVE.size,
      FIVE.stickerNumber,
      FIVE.model
    );
    expect(screen.getByText(colorText)).toBeInTheDocument();
    expect(screen.getByText(sizeText)).toBeInTheDocument();
    expect(screen.getByText(stickerText)).toBeInTheDocument();
  });

  test('close CartSidePanel', async () => {
    const { store } = withRouterAndRedux(<CartSidePanel />, INIT_STATE);

    expect(screen.getByText(sidePanelTitle)).toBeInTheDocument();
    expect(store.getState().cart.isCartOpen).toBeTruthy();

    await userEvent.click(
      screen.getByRole('button', {
        name: /закрыть/i,
      })
    );

    // await Promise.resolve(null);
    // waitFor(() => expect(store.getState().cart.isCartOpen).toBeFalsy());
    expect(store.getState().cart.isCartOpen).toBeFalsy();
  });
  test('show cart form', async () => {
    const { store } = withRouterAndRedux(<CartSidePanel />, INIT_STATE);

    expect(screen.getByText(sidePanelTitle)).toBeInTheDocument();
    expect(store.getState().cart.isCartOpen).toBeTruthy();
    expect(store.getState().cart.isCartFormVisible).toBeFalsy();

    await userEvent.click(
      screen.getByRole('button', {
        name: buttonNextText,
      })
    );

    // await Promise.resolve(null);
    // waitFor(() => expect(store.getState().cart.isCartFormVisible).toBeTruthy());
    expect(store.getState().cart.isCartFormVisible).toBeTruthy();
    expect(store.getState().cart.isCartOpen).toBeFalsy();
  });
});
