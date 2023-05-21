import { screen } from '@testing-library/react';

import { Footer } from 'components/page/footer';
import { ROUTES, TEXT } from 'constants/index';
import { withRouter } from 'mocks/mock';

describe('footer', () => {
  test('footer text', () => {
    withRouter(<Footer />);

    expect(screen.getByText(TEXT.footer.copyright)).toBeInTheDocument();
    expect(screen.getByText(TEXT.footer.policy)).toBeInTheDocument();
    expect(screen.getByRole('link').getAttribute('href') === ROUTES.policy).toBeTruthy();
  });
});
