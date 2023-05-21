import { screen } from '@testing-library/react';

import { commonInitialState, withRouterAndRedux } from 'mocks/mock';
import { cartMock } from 'mocks/mockData';
import { getCartLabels, getNumberWithSpace } from 'utils';

import { CartList } from './';

const [key5, key6] = Object.keys(cartMock);

const FIVE = cartMock[key5];
const SIX = cartMock[key6];

describe('CartList', () => {
  const INIT_STATE = {
    ...commonInitialState,
    cart: {
      ...commonInitialState.cart,
      cartList: cartMock,
    },
  };

  test('render CartList', () => {
    withRouterAndRedux(<CartList />, INIT_STATE);

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

    expect(screen.getByText(SIX.title)).toBeInTheDocument();
    expect(screen.getByText(SIX.count)).toBeInTheDocument();
    expect(screen.getByAltText(SIX.title)).toBeInTheDocument();
    const price6 = SIX.count * SIX.price;
    expect(screen.getByText(getNumberWithSpace(price6))).toBeInTheDocument();
  });
});
