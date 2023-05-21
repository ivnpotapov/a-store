import { screen } from '@testing-library/react';

import { commonInitialState, withRouterAndRedux } from 'mocks/mock';
import { cartMock } from 'mocks/mockData';
import { getNumberWithSpace } from 'utils';

import { TooltipContent } from './';

const [key5] = Object.keys(cartMock);
const PRICE_FORMAT = getNumberWithSpace(cartMock[key5].price);

describe('TooltipContent', () => {
  const INIT_STATE = {
    ...commonInitialState,
    cart: {
      ...commonInitialState.cart,
      totalPrice: cartMock[key5].price,
    },
  };

  test('render TooltipContent', () => {
    withRouterAndRedux(<TooltipContent />, INIT_STATE);

    expect(screen.getByText('=')).toBeInTheDocument();
    expect(screen.getByText(PRICE_FORMAT)).toBeInTheDocument();
  });
});
