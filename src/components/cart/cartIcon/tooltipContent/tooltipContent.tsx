import { Amount } from '@alfalab/core-components/amount';
import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';

import { useAppSelector } from 'store';
import { totalPriceSelector } from 'store/cart';

export const TooltipContent = () => {
  const totalPrice = useAppSelector(totalPriceSelector);

  return (
    <Space direction='horizontal' size={3} align='center'>
      <Typography.Text view='primary-small'>=</Typography.Text>
      <Amount value={totalPrice} minority={1} currency='RUB' bold='major' />
    </Space>
  );
};
