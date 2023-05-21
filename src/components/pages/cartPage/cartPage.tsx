import { useEffect } from 'react';

import { ModalDesktop } from '@alfalab/core-components/modal/desktop';
import { Space } from '@alfalab/core-components/space';
import { useNavigate } from 'react-router-dom';

import { CartList } from 'components/cart/cartList';
import { FormCart } from 'components/pages/cartPage/formCart';
import { PriceTotal } from 'components/pages/cartPage/priceTotal';
import { TEXT } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'store';
import { cartActions, isCartFormVisibleSelector } from 'store/cart';

import cl from './cartPage.module.css';

export const CartPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isCartFormVisible = useAppSelector(isCartFormVisibleSelector);

  const hideCartForm = () => dispatch(cartActions.hideCartForm());

  useEffect(() => {
    if (!isCartFormVisible) {
      navigate(-1);
    }
  }, [isCartFormVisible, navigate]);

  return (
    <ModalDesktop open={isCartFormVisible} onClose={hideCartForm} size='fullscreen'>
      <ModalDesktop.Header hasCloser={true} sticky={true} title={TEXT.cart.sidePanelTitle} />

      <ModalDesktop.Content>
        <div className={cl.wrap}>
          <FormCart />

          <Space fullWidth>
            <CartList />

            <PriceTotal />
          </Space>
        </div>
      </ModalDesktop.Content>
    </ModalDesktop>
  );
};
