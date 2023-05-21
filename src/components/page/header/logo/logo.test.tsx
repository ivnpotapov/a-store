import { screen } from '@testing-library/react';

import { Logo } from 'components/page/header/logo';
import { ROUTES, TEXT } from 'constants/index';
import { withRouterAndRedux } from 'mocks/mock';

describe('logo', () => {
  test('render logo', () => {
    withRouterAndRedux(<Logo />);

    expect(screen.getByText(TEXT.header.logo)).toBeInTheDocument();
    expect(screen.getByRole('link').getAttribute('href') === ROUTES.index).toBeTruthy();
  });
});
