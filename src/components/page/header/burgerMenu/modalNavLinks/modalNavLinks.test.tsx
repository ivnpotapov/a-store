import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ModalNavLinks } from 'components/page/header/burgerMenu/modalNavLinks';
import { TEXT } from 'constants/index';
import { commonInitialState, withRouterAndRedux } from 'mocks/mock';

describe('ModalNavLinks', () => {
  const INIT_STATE = {
    ...commonInitialState,
    burger: { ...commonInitialState.burger, isModalOpen: true },
  };

  test('render ModalNavLinks', () => {
    withRouterAndRedux(<ModalNavLinks />, INIT_STATE);

    expect(screen.getByText(TEXT.pages.alfaMade)).toBeInTheDocument();
    expect(screen.getByText(TEXT.pages.customDesign)).toBeInTheDocument();
    expect(screen.getByText(TEXT.pages.contact)).toBeInTheDocument();
  });

  test('close ModalNavLinks', async () => {
    const { store } = withRouterAndRedux(<ModalNavLinks />, INIT_STATE);

    expect(store.getState().burger.isModalOpen).toBeTruthy();

    await userEvent.click(screen.getByText(TEXT.pages.contact));

    expect(store.getState().burger.isModalOpen).toBeFalsy();
  });
});
