import { memo } from 'react';

import { EqualityFn } from 'react-redux';

import { CartItemCount } from 'components/cart/cartItem/cartItemCount';
import { CartItemPrice } from 'components/cart/cartItem/cartItemPrice';
import { CartItemText } from 'components/cart/cartItem/cartItemText';
import { RemoveIcon } from 'components/cart/cartItem/removeIcon';
import { useAppSelector } from 'store';
import { cartItemSelector } from 'store/cart';
import { CartItem as CartItemType } from 'types/index';

import cl from './cartItem.module.css';

type Props = {
  id: string;
};

const checkCartItemEquality: EqualityFn<CartItemType> = (prev, next): boolean =>
  prev?.title === next?.title;

export const CartItem = memo(({ id }: Props) => {
  const currentItem = useAppSelector<CartItemType>(
    (state) => cartItemSelector(state, id),
    checkCartItemEquality
  );

  if (!currentItem) {
    return null;
  }

  const { title, preview, color, size, stickerNumber, model } = currentItem;

  return (
    <li className={cl.wrap}>
      <img src={preview} alt={title} className={cl.img} />

      <CartItemText
        title={title}
        color={color}
        size={size}
        stickerNumber={stickerNumber}
        model={model}
      />

      <CartItemCount id={id} />

      <CartItemPrice id={id} />

      <RemoveIcon id={id} />
    </li>
  );
});
