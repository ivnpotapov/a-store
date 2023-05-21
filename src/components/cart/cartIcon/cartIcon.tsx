import { useEffect, useState } from 'react';

import { Tooltip } from '@alfalab/core-components/tooltip';

import { TooltipContent } from 'components/cart/cartIcon//tooltipContent';
import { IconContent } from 'components/cart/cartIcon/iconContent';
import { TEST_ID } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'store';
import { cartActions, isTooltipCartAddSelector } from 'store/cart';

import cl from './cartIcon.module.css';

const { tooltip } = TEST_ID.cart;

export const CartIcon = () => {
  const [isCartIconHover, setIsCartIconHover] = useState(false);
  const dispatch = useAppDispatch();
  const isTooltipCartAdd = useAppSelector(isTooltipCartAddSelector);

  useEffect(() => {
    if (isTooltipCartAdd) {
      setTimeout(() => {
        dispatch(cartActions.hidePriceTooltip());
      }, 1000);
    }
  }, [dispatch, isTooltipCartAdd]);

  const toggleTooltip = () => {
    setIsCartIconHover((prev) => !prev);
  };

  const toggleCartOpen = () => dispatch(cartActions.toggleCartOpen());

  return (
    <div className={cl.wrap} onClick={toggleCartOpen}>
      <Tooltip
        content={<TooltipContent />}
        dataTestId={tooltip}
        position='left'
        view='hint'
        open={isTooltipCartAdd || isCartIconHover}
        trigger='hover'
        onOpen={toggleTooltip}
        onClose={toggleTooltip}
      >
        <IconContent />
      </Tooltip>
    </div>
  );
};
