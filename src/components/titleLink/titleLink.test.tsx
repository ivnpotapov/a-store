import { screen } from '@testing-library/react';

import { TitleLink } from 'components/titleLink';
import { ROUTES, TEXT } from 'constants/index';
import { withRouterAndRedux } from 'mocks/mock';

describe('TitleLink', () => {
  test('render header', () => {
    withRouterAndRedux(<TitleLink to={ROUTES.index} text={TEXT.header.logo} />);

    expect(screen.getByText(TEXT.header.logo)).toBeInTheDocument();
    expect(screen.getByRole('link').getAttribute('href') === ROUTES.index).toBeTruthy();
  });
});
