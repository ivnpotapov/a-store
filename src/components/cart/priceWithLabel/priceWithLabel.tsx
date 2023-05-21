import { memo } from 'react';

import { Space } from '@alfalab/core-components/space';
import { Typography, TextProps } from '@alfalab/core-components/typography';

import { Price } from 'components/price';

import cl from './priceWithLabel.module.css';

type Props = {
  sumText: string;
  price: number;
  weight?: TextProps['weight'];
};

export const PriceWithLabel = memo(({ sumText, price, weight = 'regular' }: Props) => {
  return (
    <Space direction='horizontal' size={3} className={cl.sumWrap}>
      <Typography.Text view='primary-large' weight={weight}>
        {`${sumText}:`}
      </Typography.Text>
      <Price price={price} weight={weight} />
    </Space>
  );
});
