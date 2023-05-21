import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Plug } from 'components/app/plug/plug';
import { ErrorBoundary } from 'components/errorBoundary';
import { ROUTES, TEXT } from 'constants/index';
import { withRouterAndRedux } from 'mocks/mock';

const Child = () => {
  throw new Error('Test render error boundary with error');
};

describe('Error Boundary', () => {
  test(`render error boundary with error`, () => {
    withRouterAndRedux(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    );

    expect(screen.getByText(TEXT.page404.mainText)).toBeInTheDocument();
    expect(screen.getByText(TEXT.page404.buttonText)).toBeInTheDocument();
  });

  test(`render with no error`, () => {
    withRouterAndRedux(
      <ErrorBoundary>
        <Plug text='text' />
      </ErrorBoundary>
    );

    expect(screen.queryByText(TEXT.page404.mainText)).toBeNull();
    expect(screen.queryByText(TEXT.page404.buttonText)).toBeNull();
  });

  test(`redirect`, async () => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        href: ROUTES.customDesign,
      },
    });

    withRouterAndRedux(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    );

    expect(screen.getByText(TEXT.page404.buttonText)).toBeInTheDocument();

    await userEvent.click(screen.getByText(TEXT.page404.buttonText));

    expect(window.location.href).toEqual(ROUTES.index);
  });
});
