import { screen } from '@testing-library/react';

import { Home } from 'components/pages/home';
import { ROUTES, TEXT, TEST_ID } from 'constants/index';
import { withRouterAndRedux } from 'mocks/mock';

describe('home', () => {
  test('render Home', () => {
    withRouterAndRedux(<Home />);

    expect(screen.getByText(TEXT.pages.alfaMade)).toBeInTheDocument();
    expect(
      screen.getByTestId(TEST_ID.home.alfaMadeLink).getAttribute('href') === ROUTES.alphaMade
    ).toBeTruthy();

    expect(screen.getByText(TEXT.pages.customDesign)).toBeInTheDocument();
    expect(
      screen.getByTestId(TEST_ID.home.yourDesignLink).getAttribute('href') === ROUTES.customDesign
    ).toBeTruthy();
  });
});
