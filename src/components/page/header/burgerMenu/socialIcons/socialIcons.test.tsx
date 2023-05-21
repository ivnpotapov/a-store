import { screen } from '@testing-library/react';

import { SocialIcons } from 'components/page/header/burgerMenu/socialIcons';
import { TEXT, TEST_ID } from 'constants/index';
import { withRouterAndRedux } from 'mocks/mock';

describe('SocialIcons', () => {
  const EMAIL_LINK = `mailto:${TEXT.contacts.email}`;
  const TEL_LINK = `tel:${TEXT.contacts.tel}`;
  const WA_LINK = TEXT.contacts.wa;

  test('render email icons', () => {
    withRouterAndRedux(<SocialIcons />);

    expect(screen.getByTestId(TEST_ID.burger.emailLink)).toBeInTheDocument();
    expect(
      screen.getByTestId(TEST_ID.burger.emailLink).getAttribute('href') === EMAIL_LINK
    ).toBeTruthy();
  });

  test('render tel icons', () => {
    withRouterAndRedux(<SocialIcons />);

    expect(screen.getByTestId(TEST_ID.burger.telLink)).toBeInTheDocument();
    expect(
      screen.getByTestId(TEST_ID.burger.telLink).getAttribute('href') === TEL_LINK
    ).toBeTruthy();
  });

  test('render wa icons', () => {
    withRouterAndRedux(<SocialIcons />);

    expect(screen.getByTestId(TEST_ID.burger.waLink)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_ID.burger.waLink).getAttribute('href') === WA_LINK).toBeTruthy();
  });
});
