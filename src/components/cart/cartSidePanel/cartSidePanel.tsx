import { Button } from '@alfalab/core-components/button';
import { Divider } from '@alfalab/core-components/divider';
import { SidePanelResponsive } from '@alfalab/core-components/side-panel/responsive';
import { useNavigate } from 'react-router-dom';

import { CartList } from 'components/cart/cartList';
import { SidePanelTotalPrice } from 'components/cart/cartSidePanel/sidePanelTotalPrice';
import { ROUTES, TEXT } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'store';
import { cartActions, isCartOpenSelector } from 'store/cart';

import cl from './cartSidePanel.module.css';

const { buttonNextText, sidePanelTitle } = TEXT.cart;

export const CartSidePanel = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(isCartOpenSelector);

  const toggleCartOpen = () => dispatch(cartActions.toggleCartOpen());
  const showCartForm = () => {
    dispatch(cartActions.showCartForm());
    navigate(ROUTES.cart);
  };

  return (
    <SidePanelResponsive open={isCartOpen} onClose={toggleCartOpen}>
      <SidePanelResponsive.Header hasCloser={true} title={sidePanelTitle} />

      <SidePanelResponsive.Content className={cl.wrapList}>
        <Divider />

        <CartList />

        <Divider />

        <SidePanelTotalPrice />

        <Button block={true} view='primary' onClick={showCartForm}>
          {buttonNextText}
        </Button>
      </SidePanelResponsive.Content>
    </SidePanelResponsive>
  );
};
