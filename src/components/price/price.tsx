import { Amount } from '@alfalab/core-components/amount';
import { TextProps, Typography } from '@alfalab/core-components/typography';

type Props = {
  price: number;
  dataTestId?: string;
  weight?: TextProps['weight'];
};

export const Price = ({ price, dataTestId, weight = 'regular' }: Props) => {
  return (
    <Typography.Text view='primary-large' weight={weight} data-test-id={dataTestId}>
      <Amount value={price} currency='RUR' minority={1} bold='none' />
    </Typography.Text>
  );
};
