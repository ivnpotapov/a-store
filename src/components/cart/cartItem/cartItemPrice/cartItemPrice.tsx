import { Price } from 'components/price';
import { useAppSelector } from 'store';
import { cartItemSelector } from 'store/cart';

type Props = {
  id: string;
};

export const CartItemPrice = ({ id }: Props) => {
  const { count, price } = useAppSelector((state) => cartItemSelector(state, id));

  return <Price price={count * price} />;
};
