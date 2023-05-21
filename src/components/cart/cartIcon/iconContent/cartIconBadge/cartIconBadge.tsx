import { Badge } from '@alfalab/core-components/badge';

import { useAppSelector } from 'store';
import { countProductsSelector } from 'store/cart';

export const CartIconBadge = () => {
  const countProducts = useAppSelector(countProductsSelector);

  return <Badge view='count' height={24} content={countProducts} />;
};
