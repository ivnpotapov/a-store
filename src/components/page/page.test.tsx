import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Page } from 'components/page';
import { BREAK_POINT_MOBILE, TEST_ID, TEXT } from 'constants/index';
import { withRouterAndRedux } from 'mocks/mock';
import { notificationsActions } from 'store/notifications';

describe('page', () => {
  const EMAIL_LINK = `mailto:${TEXT.contacts.email}`;
  const TEL_LINK = `tel:${TEXT.contacts.tel}`;
  const WA_LINK = TEXT.contacts.wa;

  test('render page header', () => {
    withRouterAndRedux(<Page />);

    expect(screen.getByText(TEXT.header.logo)).toBeInTheDocument();
    expect(screen.getByText(TEXT.header.burger)).toBeInTheDocument();

    expect(screen.queryByText(TEXT.pages.contact)).toBeNull();
  });

  test('open burger modal', async () => {
    withRouterAndRedux(<Page />);

    expect(screen.queryByText(TEXT.pages.contact)).toBeNull();

    await userEvent.click(screen.getByText(TEXT.header.burger));

    expect(screen.getByText(TEXT.pages.alfaMade)).toBeInTheDocument();
    expect(screen.getByText(TEXT.pages.customDesign)).toBeInTheDocument();
    expect(screen.getByText(TEXT.pages.contact)).toBeInTheDocument();

    expect(
      screen.getAllByRole('link').some((role) => role.getAttribute('href') === EMAIL_LINK)
    ).toBeTruthy();
    expect(
      screen.getAllByRole('link').some((role) => role.getAttribute('href') === TEL_LINK)
    ).toBeTruthy();
    expect(
      screen.getAllByRole('link').some((role) => role.getAttribute('href') === WA_LINK)
    ).toBeTruthy();

    expect(
      screen.getByTestId(TEST_ID.burger.emailLink).getAttribute('href') === EMAIL_LINK
    ).toBeTruthy();
    expect(
      screen.getByTestId(TEST_ID.burger.telLink).getAttribute('href') === TEL_LINK
    ).toBeTruthy();
    expect(screen.getByTestId(TEST_ID.burger.waLink).getAttribute('href') === WA_LINK).toBeTruthy();
  });

  test('close burger modal', async () => {
    const { store } = withRouterAndRedux(<Page />);

    expect(store.getState().burger.isModalOpen).toBeFalsy();
    expect(screen.queryByText(TEXT.pages.contact)).toBeNull();
    expect(screen.queryByTestId(TEST_ID.header.closeIcon)).toBeNull();

    await userEvent.click(screen.getByText(TEXT.header.burger));

    expect(store.getState().burger.isModalOpen).toBeTruthy();
    expect(screen.getByText(TEXT.pages.contact)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_ID.header.closeIcon)).toBeInTheDocument();

    await userEvent.click(screen.getByTestId(TEST_ID.header.closeIcon));

    expect(store.getState().burger.isModalOpen).toBeFalsy();
  });

  test('render page mobile', () => {
    window.innerWidth = BREAK_POINT_MOBILE;
    window.dispatchEvent(new Event('resize'));

    withRouterAndRedux(<Page />);

    expect(screen.getByText(TEXT.header.logo)).toBeInTheDocument();
    expect(screen.queryByText(TEXT.header.burger)).toBeNull();
  });

  test('render page footer', () => {
    withRouterAndRedux(<Page />);

    expect(screen.getByText(TEXT.footer.copyright)).toBeInTheDocument();
    expect(screen.getByText(TEXT.footer.policy)).toBeInTheDocument();
  });

  test('render notification', () => {
    const successText = 'success';
    const neutralText = 'neutral';
    const failText = TEXT.notes.errorFetchText;

    const { store } = withRouterAndRedux(<Page />);

    act(() => store.dispatch(notificationsActions.success({ title: successText })));

    expect(screen.getByText(successText)).toBeInTheDocument();

    act(() => store.dispatch(notificationsActions.error({ title: failText })));

    expect(screen.getByText(failText)).toBeInTheDocument();

    act(() => store.dispatch(notificationsActions.neutral({ title: neutralText })));
    expect(screen.getByText(neutralText)).toBeInTheDocument();
  });

  test('remove notification', () => {
    const failText = TEXT.notes.errorFetchText;

    const { store } = withRouterAndRedux(<Page />);

    act(() => store.dispatch(notificationsActions.error({ id: '1', title: failText })));

    expect(screen.getByText(failText)).toBeInTheDocument();

    act(() => store.dispatch(notificationsActions.remove('1')));

    expect(screen.queryByText(failText)).toBeNull();
  });

  test('remove notification by timer', () => {
    const failText = TEXT.notes.errorFetchText;

    const { store } = withRouterAndRedux(<Page />);

    act(() =>
      store.dispatch(notificationsActions.error({ id: '1', title: failText, autoCloseDelay: 500 }))
    );

    expect(screen.getByText(failText)).toBeInTheDocument();

    waitFor(() => expect(screen.queryByText(failText)).toBeNull(), { timeout: 1000 });
  });
});
