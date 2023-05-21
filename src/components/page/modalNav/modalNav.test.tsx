import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ModalNav } from 'components/page/modalNav';
import { TEST_ID } from 'constants/index';
import { commonInitialState, withRouterAndRedux } from 'mocks/mock';

describe('modalNav', () => {
  test('close ModalNav', async () => {
    const INIT_STATE = {
      ...commonInitialState,
      burger: {
        ...commonInitialState.burger,
        isModalOpen: true,
      },
    };
    const { store } = withRouterAndRedux(<ModalNav />, INIT_STATE);

    expect(store.getState().burger.isModalOpen).toBeTruthy();
    expect(screen.getByTestId(TEST_ID.header.closeIcon)).toBeInTheDocument();

    await userEvent.click(screen.getByTestId(TEST_ID.header.closeIcon));

    await Promise.resolve(null);
    expect(store.getState().burger.isModalOpen).toBeFalsy();
  });

  test('ModalNav closed', async () => {
    const INIT_STATE = {
      ...commonInitialState,
      burger: {
        ...commonInitialState.burger,
        isModalOpen: false,
      },
    };

    const { store } = withRouterAndRedux(<ModalNav />, INIT_STATE);

    expect(screen.queryByTestId(TEST_ID.header.closeIcon)).toBeNull();
    expect(store.getState().burger.isModalOpen).toBeFalsy();
  });
});
