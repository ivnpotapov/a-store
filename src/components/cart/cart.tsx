import { CartIcon } from 'components/cart/cartIcon';
import { useAppSelector } from 'store';
import { isCartIconVisibleSelector } from 'store/cart';

export const Cart = () => {
  const isCartIconVisible = useAppSelector(isCartIconVisibleSelector);

  return <>{isCartIconVisible && <CartIcon />}</>;
};
