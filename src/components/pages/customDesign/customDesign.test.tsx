import { act, screen } from '@testing-library/react';

import { CustomDesign } from 'components/pages/customDesign';
import { TEXT } from 'constants/index';
import { withRouterAndRedux } from 'mocks/mock';
import { dataGroups } from 'mocks/mockData';
import { productsActions } from 'store/products';

const GROUP_FIRST = dataGroups.groups[0];
const GROUP_SECOND = dataGroups.groups[1];
const GROUP_THIRD = dataGroups.groups[2];
const PRODUCT_FIRST = dataGroups.groups[0].products[0];
const PRODUCT_SECOND = dataGroups.groups[1].products[0];
const PRODUCT_THIRD = dataGroups.groups[2].products[0];

describe('customDesign', () => {
  test('render title and footer', () => {
    withRouterAndRedux(<CustomDesign />);

    expect(screen.getByText(TEXT.pages.customDesign)).toBeInTheDocument();
    expect(screen.getByText(TEXT.customDesign.text)).toBeInTheDocument();
  });

  test('render cards', async () => {
    const { store } = withRouterAndRedux(<CustomDesign />);

    await act(() => store.dispatch(productsActions.setProductsGroup(dataGroups.groups)));

    expect(screen.getByText(GROUP_FIRST.title)).toBeInTheDocument();
    expect(screen.getByText(GROUP_FIRST.description)).toBeInTheDocument();
    expect(screen.getByText(PRODUCT_FIRST.title)).toBeInTheDocument();
    expect(screen.getByText(PRODUCT_FIRST.subtitle)).toBeInTheDocument();
    expect(screen.getByAltText(PRODUCT_FIRST.title)).toBeInTheDocument();

    expect(screen.getByText(GROUP_SECOND.title)).toBeInTheDocument();
    expect(screen.getByText(GROUP_SECOND.description)).toBeInTheDocument();
    expect(screen.getByText(PRODUCT_SECOND.title)).toBeInTheDocument();
    expect(screen.getByText(PRODUCT_SECOND.subtitle)).toBeInTheDocument();
    expect(screen.getByAltText(PRODUCT_SECOND.title)).toBeInTheDocument();

    expect(screen.getByText(GROUP_THIRD.title)).toBeInTheDocument();
    expect(screen.getByText(GROUP_THIRD.description)).toBeInTheDocument();
    expect(screen.getByText(PRODUCT_THIRD.title)).toBeInTheDocument();

    expect(screen.getByAltText(PRODUCT_THIRD.title)).toBeInTheDocument();
  });
});
