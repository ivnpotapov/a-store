import { memo } from 'react';

import { Circle } from '@alfalab/core-components/icon-view/circle';
import { BasketLineMIcon } from '@alfalab/icons-glyph/BasketLineMIcon';

import { TEST_ID } from 'constants/index';

import { CartIconBadge } from './cartIconBadge';
import cl from './iconContent.module.css';

const { cartIcon } = TEST_ID.cart;

export const IconContent = memo(() => {
  return (
    <Circle
      dataTestId={cartIcon}
      className={cl.circle}
      size={80}
      backgroundColor='#ef3124'
      topAddons={CartIconBadge()}
    >
      <BasketLineMIcon fill='white' />
    </Circle>
  );
});
