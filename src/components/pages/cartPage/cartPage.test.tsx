import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CartPage } from 'components/pages/cartPage/';
import { TEXT } from 'constants/index';
import { commonInitialState, withRouterAndRedux } from 'mocks/mock';

jest.setTimeout(15000);

describe('CartPage', () => {
  test('render CartPage', async () => {
    const INIT_STATE = {
      ...commonInitialState,
      cart: {
        ...commonInitialState.cart,
        isCartFormVisible: true,
      },
    };
    const { store } = withRouterAndRedux(<CartPage />, INIT_STATE);

    expect(screen.getByText(TEXT.cart.sidePanelTitle)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /закрыть/i }));

    expect(store.getState().cart.isCartFormVisible).toBeFalsy();
  });

  test('not render CartPage', () => {
    withRouterAndRedux(<CartPage />);

    expect(screen.queryByText(TEXT.cart.sidePanelTitle)).toBeNull();
  });
});
