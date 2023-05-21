import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TEST_ID } from 'constants/index';
import { commonInitialState, withRouterAndRedux } from 'mocks/mock';
import { cartMock } from 'mocks/mockData';

import { CartIcon } from './';

const [key5] = Object.keys(cartMock);
const COUNT = Object.keys(cartMock).reduce((acc, el) => (acc += cartMock[el].count), 0);

const { tooltip, cartIcon } = TEST_ID.cart;

describe('cart icon', () => {
  const INIT_STATE = {
    ...commonInitialState,
    cart: {
      ...commonInitialState.cart,
      isCartIconVisible: true,
      isTooltipCartAdd: true,
      countProducts: COUNT,
      totalPrice: cartMock[key5].price,
    },
  };

  test('render CartIcon', () => {
    withRouterAndRedux(<CartIcon />, INIT_STATE);

    expect(screen.getByTestId(cartIcon)).toBeInTheDocument();
    expect(screen.getByText(COUNT)).toBeInTheDocument();
  });

  test('change state side panel', async () => {
    const { store } = withRouterAndRedux(<CartIcon />, INIT_STATE);

    expect(store.getState().cart.isCartOpen).toBeFalsy();

    await userEvent.click(screen.getByTestId(cartIcon));

    expect(store.getState().cart.isCartOpen).toBeTruthy();
  });

  test('tooltip add product to cart', async () => {
    withRouterAndRedux(<CartIcon />, INIT_STATE);

    expect(screen.getByTestId(tooltip)).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.queryByTestId(tooltip)).toBeNull();
      },
      { timeout: 1500 }
    );
  });

  test('change hover', async () => {
    withRouterAndRedux(<CartIcon />);

    expect(screen.queryByTestId(tooltip)).toBeNull();

    await userEvent.hover(screen.getByTestId(cartIcon));

    expect(await screen.findByTestId(tooltip)).toBeInTheDocument();
  });
});
