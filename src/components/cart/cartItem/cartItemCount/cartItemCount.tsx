import { memo } from 'react';

import { IconButton } from '@alfalab/core-components/icon-button';
import { Circle } from '@alfalab/core-components/icon-view/circle';
import { Space } from '@alfalab/core-components/space';
import { MinusMIcon } from '@alfalab/icons-glyph/MinusMIcon';
import { PlusMIcon } from '@alfalab/icons-glyph/PlusMIcon';

import { TEST_ID } from 'constants/index';
import { useAppDispatch } from 'store';
import { cartActions } from 'store/cart';

import { CartItemCountNumber } from './cartItemCountNumber';

type Props = {
  id: string;
};

export const CartItemCount = memo(({ id }: Props) => {
  const dispatch = useAppDispatch();

  const handelPlusClick = () => {
    dispatch(cartActions.incrementCount(id));
  };

  const handelMinusClick = () => {
    dispatch(cartActions.decrementCount(id));
  };

  return (
    <Space direction='horizontal' size={7} align='center'>
      <Circle size={24}>
        <IconButton
          icon={MinusMIcon}
          size='xxs'
          view='secondary'
          onClick={handelMinusClick}
          dataTestId={TEST_ID.cart.decreaseCount}
        />
      </Circle>

      <CartItemCountNumber id={id} />

      <Circle size={24}>
        <IconButton
          icon={PlusMIcon}
          size='xxs'
          view='secondary'
          onClick={handelPlusClick}
          dataTestId={TEST_ID.cart.increaseCount}
        />
      </Circle>
    </Space>
  );
});
