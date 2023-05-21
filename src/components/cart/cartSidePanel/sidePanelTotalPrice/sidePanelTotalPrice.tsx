import { PriceWithLabel } from 'components/cart/priceWithLabel';
import { TEXT } from 'constants/index';
import { useAppSelector } from 'store';
import { totalPriceSelector } from 'store/cart';
const { sumText } = TEXT.cart;

export const SidePanelTotalPrice = () => {
  const totalPrice = useAppSelector(totalPriceSelector);

  return <PriceWithLabel sumText={sumText} price={totalPrice} weight='bold' />;
};
