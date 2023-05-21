import { screen } from '@testing-library/react';

import { BurgerMenu } from 'components/page/header/burgerMenu';
import { ROUTES, TEXT, TEST_ID } from 'constants/index';
import { commonInitialState, withRouterAndRedux } from 'mocks/mock';

describe('burgerMenu', () => {
  test('render with logo', () => {
    const INIT_STATE = {
      ...commonInitialState,
      burger: { ...commonInitialState.burger, isLogoShown: true },
    };

    withRouterAndRedux(<BurgerMenu />, INIT_STATE);

    expect(screen.getByText(TEXT.header.logo)).toBeInTheDocument();
    expect(
      screen.getByTestId(TEST_ID.header.logo).getAttribute('href') === ROUTES.index
    ).toBeTruthy();
  });

  test('render without logo', () => {
    const INIT_STATE = {
      ...commonInitialState,
      burger: { ...commonInitialState.burger, isLogoShown: false },
    };

    withRouterAndRedux(<BurgerMenu />, INIT_STATE);

    expect(screen.queryByText(TEXT.header.logo)).toBeNull();
  });

  test('render closeIcon', () => {
    withRouterAndRedux(<BurgerMenu />);
    expect(screen.getByTestId(TEST_ID.header.closeIcon)).toBeInTheDocument();
  });

  test('render NavLinks', () => {
    withRouterAndRedux(<BurgerMenu />);
    expect(screen.getByText(TEXT.pages.alfaMade)).toBeInTheDocument();
    expect(screen.getByText(TEXT.pages.customDesign)).toBeInTheDocument();
    expect(screen.getByText(TEXT.pages.contact)).toBeInTheDocument();
  });

  test('render policy', () => {
    withRouterAndRedux(<BurgerMenu />);

    expect(screen.getByText(TEXT.footer.policy)).toBeInTheDocument();
    expect(
      screen.getByTestId(TEST_ID.burger.policyLink).getAttribute('href') === ROUTES.policy
    ).toBeTruthy();
  });

  test('render social icons', () => {
    const EMAIL_LINK = `mailto:${TEXT.contacts.email}`;
    const TEL_LINK = `tel:${TEXT.contacts.tel}`;
    const WA_LINK = TEXT.contacts.wa;

    withRouterAndRedux(<BurgerMenu />);

    expect(screen.getByTestId(TEST_ID.burger.emailLink)).toBeInTheDocument();
    expect(
      screen.getByTestId(TEST_ID.burger.emailLink).getAttribute('href') === EMAIL_LINK
    ).toBeTruthy();

    expect(screen.getByTestId(TEST_ID.burger.telLink)).toBeInTheDocument();
    expect(
      screen.getByTestId(TEST_ID.burger.telLink).getAttribute('href') === TEL_LINK
    ).toBeTruthy();

    expect(screen.getByTestId(TEST_ID.burger.waLink)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_ID.burger.waLink).getAttribute('href') === WA_LINK).toBeTruthy();
  });
});
