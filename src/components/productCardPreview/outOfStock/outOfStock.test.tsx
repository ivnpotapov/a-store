import { render, screen } from '@testing-library/react';

import { OutOfStock } from 'components/productCardPreview/outOfStock';
import { TEXT } from 'constants/index';

describe('render OutOfStock', () => {
  test('OutOfStock text', () => {
    render(<OutOfStock />);

    expect(screen.getByText(TEXT.alfaMade.outOfStock)).toBeInTheDocument();
  });
});
