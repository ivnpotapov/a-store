import { memo, useCallback } from 'react';

import { IconButton } from '@alfalab/core-components/icon-button';
import { Circle } from '@alfalab/core-components/icon-view/circle';
import { CrossMIcon } from '@alfalab/icons-glyph/CrossMIcon';

import { TEST_ID } from 'constants/index';
import { useAppDispatch } from 'store';
import { cartActions } from 'store/cart';

const { removeButton } = TEST_ID.cart;

type Props = {
  id: string;
};

export const RemoveIcon = memo(({ id }: Props) => {
  const dispatch = useAppDispatch();

  const handelRemoveClick = useCallback(() => {
    dispatch(cartActions.removeProduct(id));
  }, [dispatch, id]);

  return (
    <Circle size={32}>
      <IconButton
        icon={CrossMIcon}
        size='xs'
        view='secondary'
        onClick={handelRemoveClick}
        dataTestId={removeButton}
      />
    </Circle>
  );
});
