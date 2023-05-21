import { screen } from '@testing-library/react';

import { Burger } from 'components/page/header/burger';
import { TEXT } from 'constants/index';
import { commonInitialState, withRouterAndRedux } from 'mocks/mock';

describe('burger', () => {
  test('burger with text', () => {
    const INIT_STATE = {
      ...commonInitialState,
      burger: { ...commonInitialState.burger, isLogoShown: false },
    };

    withRouterAndRedux(<Burger />, INIT_STATE);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(TEXT.header.burger)).toBeInTheDocument();
  });

  test('burger without text', () => {
    const INIT_STATE = {
      ...commonInitialState,
      burger: { ...commonInitialState.burger, isLogoShown: true },
    };

    withRouterAndRedux(<Burger />, INIT_STATE);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.queryByText(TEXT.header.burger)).toBeNull();
  });
});
