import { screen } from '@testing-library/react';

import { ProductCardPreview } from 'components/productCardPreview';
import { TEXT } from 'constants/index';
import { withRouterAndRedux } from 'mocks/mock';
import { dataExtend } from 'mocks/mockData';

describe('CardProduct', () => {
  const PRODUCT_TEST = dataExtend.products[0];
  const PRODUCT_WITH_OVERLAY = dataExtend.products[3];

  test('render CardProduct', () => {
    withRouterAndRedux(<ProductCardPreview card={PRODUCT_TEST} />);

    expect(screen.getByText(PRODUCT_TEST.title)).toBeInTheDocument();
    expect(screen.getByAltText(PRODUCT_TEST.title)).toBeInTheDocument();
  });

  test('render not overlay', () => {
    withRouterAndRedux(<ProductCardPreview card={PRODUCT_TEST} />);

    expect(screen.queryByText(TEXT.alfaMade.outOfStock)).toBeNull();
  });

  test('render with overlay', () => {
    withRouterAndRedux(<ProductCardPreview card={PRODUCT_WITH_OVERLAY} />);

    expect(screen.getByText(TEXT.alfaMade.outOfStock)).toBeInTheDocument();
    expect(screen.getByText(PRODUCT_WITH_OVERLAY.title)).toBeInTheDocument();
    expect(screen.getByText('799')).toBeInTheDocument();
    expect(screen.getByAltText(PRODUCT_WITH_OVERLAY.title)).toBeInTheDocument();
  });
});
