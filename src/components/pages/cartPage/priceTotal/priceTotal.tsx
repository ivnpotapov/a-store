import { EqualityFn } from 'react-redux';

import { PriceWithLabel } from 'components/cart/priceWithLabel';
import { TEXT } from 'constants/index';
import { useAppSelector } from 'store';
import { deliverySelector, totalPriceSelector } from 'store/cart';
import { Delivery } from 'types';

import cl from './priceTotal.module.css';

const { sumText, sumTotalText } = TEXT.cart;

const checkPriceEquality: EqualityFn<Delivery> = (prev, next): boolean =>
  prev?.price === next?.price;

export const PriceTotal = () => {
  const totalPrice = useAppSelector(totalPriceSelector);
  const { label, price } = useAppSelector(deliverySelector, checkPriceEquality);

  return (
    <div className={cl.sumWrap}>
      <PriceWithLabel sumText={sumText} price={totalPrice} weight='bold' />
      <PriceWithLabel sumText={label} price={price} />
      <PriceWithLabel sumText={sumTotalText} price={totalPrice + price} weight='bold' />
    </div>
  );
};
