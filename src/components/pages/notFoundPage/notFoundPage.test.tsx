import { screen } from '@testing-library/react';

import { NotFoundPage } from 'components/pages/notFoundPage';
import { TEXT } from 'constants/index';
import { withRouterAndRedux } from 'mocks/mock';

describe('notFoundPage', () => {
  test('render NotFoundPage', () => {
    withRouterAndRedux(<NotFoundPage />);

    expect(screen.getByText(TEXT.page404.errotText)).toBeInTheDocument();
    expect(screen.getByText(TEXT.page404.mainText)).toBeInTheDocument();
    expect(screen.getByText(TEXT.page404.buttonText)).toBeInTheDocument();
  });
});
