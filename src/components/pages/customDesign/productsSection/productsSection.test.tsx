import { screen } from '@testing-library/react';

import { ProductsSection } from 'components/pages/customDesign/productsSection';
import { commonInitialState, withRouterAndRedux } from 'mocks/mock';
import { dataGroups } from 'mocks/mockData';

describe('ProductsSection', () => {
  const INIT_STATE = {
    ...commonInitialState,
    products: {
      ...commonInitialState.products,
      productsGroup: dataGroups.groups,
    },
  };

  const ID = 0;

  test('render section title', () => {
    withRouterAndRedux(<ProductsSection id={ID} />, INIT_STATE);

    expect(screen.getByText(dataGroups.groups[ID].title)).toBeInTheDocument();
    expect(screen.getByText(dataGroups.groups[ID].description)).toBeInTheDocument();
  });

  test('render cards', () => {
    withRouterAndRedux(<ProductsSection id={ID} />, INIT_STATE);

    expect(screen.getByText(dataGroups.groups[ID].products[ID].title)).toBeInTheDocument();
    expect(screen.getByText(dataGroups.groups[ID].products[ID].subtitle)).toBeInTheDocument();
    expect(screen.getByAltText(dataGroups.groups[ID].products[ID].title)).toBeInTheDocument();
  });
});
