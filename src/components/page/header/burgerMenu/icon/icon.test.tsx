import MailMIcon from '@alfalab/icons-glyph/MailMIcon';
import { screen } from '@testing-library/react';

import { Icon } from 'components/page/header/burgerMenu/icon';
import { TEXT, TEST_ID } from 'constants/index';
import { withRouterAndRedux } from 'mocks/mock';

describe('icon', () => {
  const EMAIL_LINK = `mailto:${TEXT.contacts.email}`;

  test('render icon', async () => {
    withRouterAndRedux(
      <Icon IconComponent={MailMIcon} href={EMAIL_LINK} dataTestId={TEST_ID.burger.emailLink} />
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByTestId(TEST_ID.burger.emailLink)).toBeInTheDocument();
    expect(
      screen.getByTestId(TEST_ID.burger.emailLink).getAttribute('href') === EMAIL_LINK
    ).toBeTruthy();
  });
});
