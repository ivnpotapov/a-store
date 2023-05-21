import { render, screen } from '@testing-library/react';

import { Plug } from 'components/app/plug';

describe('render plug', () => {
  test('plug text', () => {
    render(<Plug text='test text' />);

    expect(screen.getByText('test text')).toBeInTheDocument();
  });
});
