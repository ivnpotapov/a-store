import { EqualityFn } from 'react-redux';

import { CartItem } from 'components/cart/cartItem';
import { useAppSelector } from 'store';
import { cartListKeysSelector } from 'store/cart';

import cl from './cartList.module.css';

const checkCartListEquality: EqualityFn<string[]> = (prev, next) => prev?.length === next?.length;

export const CartList = () => {
  const cartListKeys = useAppSelector(cartListKeysSelector, checkCartListEquality);

  return (
    <ul className={cl.productsList}>
      {cartListKeys.map((key) => {
        return <CartItem key={key} id={key} />;
      })}
    </ul>
  );
};
