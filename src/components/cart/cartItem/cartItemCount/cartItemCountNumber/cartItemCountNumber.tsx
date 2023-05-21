import { Typography } from '@alfalab/core-components/typography';

import { useAppSelector } from 'store';
import { cartItemSelector } from 'store/cart';

type Props = {
  id: string;
};

export const CartItemCountNumber = ({ id }: Props) => {
  const { count } = useAppSelector((state) => cartItemSelector(state, id));

  return (
    <Typography.Text view='primary-large' weight='bold'>
      {count}
    </Typography.Text>
  );
};
