import { screen } from '@testing-library/react';

import { Cart } from 'components/cart';
import { TEST_ID } from 'constants/index';
import { commonInitialState, withRouterAndRedux } from 'mocks/mock';

const { cartIcon } = TEST_ID.cart;

describe('Cart', () => {
  test('render cart icon', () => {
    const INIT_STATE = {
      ...commonInitialState,
      cart: {
        ...commonInitialState.cart,
        isCartIconVisible: true,
      },
    };
    withRouterAndRedux(<Cart />, INIT_STATE);

    expect(screen.getByTestId(cartIcon)).toBeInTheDocument();
  });

  test('not render cart icon', () => {
    const INIT_STATE = {
      ...commonInitialState,
      cart: {
        ...commonInitialState.cart,
        isCartIconVisible: false,
      },
    };
    withRouterAndRedux(<Cart />, INIT_STATE);

    expect(screen.queryByTestId(cartIcon)).toBeNull();
  });
});
