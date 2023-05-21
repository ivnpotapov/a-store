import { screen } from '@testing-library/react';

import { App } from 'components/app';
import { TEXT } from 'constants/index';
import { withRouterAndRedux } from 'mocks/mock';

describe('App', () => {
  test('render app header', () => {
    withRouterAndRedux(<App />);

    expect(screen.getByText(TEXT.header.logo)).toBeInTheDocument();
    expect(screen.getByText(TEXT.header.burger)).toBeInTheDocument();
  });

  test('render app main', () => {
    withRouterAndRedux(<App />);

    expect(screen.getByText(TEXT.pages.alfaMade)).toBeInTheDocument();
    expect(screen.getByText(TEXT.pages.customDesign)).toBeInTheDocument();
  });

  test('render app footer', () => {
    withRouterAndRedux(<App />);

    expect(screen.getByText(TEXT.footer.copyright)).toBeInTheDocument();
    expect(screen.getByText(TEXT.footer.policy)).toBeInTheDocument();
  });
});
