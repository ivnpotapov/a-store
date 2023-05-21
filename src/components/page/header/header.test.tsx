import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Header } from 'components/page/header';
import { ROUTES, TEXT } from 'constants/index';
import { commonInitialState, withRouterAndRedux } from 'mocks/mock';

const { logo, burger } = TEXT.header;

describe('header', () => {
  test('render header', () => {
    const INIT_STATE = {
      ...commonInitialState,
      burger: { ...commonInitialState.burger, isLogoShown: false },
    };

    withRouterAndRedux(<Header />, INIT_STATE);

    expect(screen.getByText(logo)).toBeInTheDocument();
    expect(screen.getByRole('link').getAttribute('href') === ROUTES.index).toBeTruthy();

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(burger)).toBeInTheDocument();
  });

  test('render mobile header', () => {
    const INIT_STATE = {
      ...commonInitialState,
      burger: { ...commonInitialState.burger, isLogoShown: true },
    };
    withRouterAndRedux(<Header />, INIT_STATE);

    expect(screen.getByText(logo)).toBeInTheDocument();

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.queryByText(burger)).toBeNull();
  });

  test('change state by burger click', async () => {
    const { store } = withRouterAndRedux(<Header />);

    expect(store.getState().burger.isModalOpen).toBeFalsy();
    expect(screen.getByRole('img')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('img'));

    expect(store.getState().burger.isModalOpen).toBeTruthy();
  });
});
