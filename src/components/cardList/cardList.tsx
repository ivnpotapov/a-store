import { ProductCardPreview } from 'components/productCardPreview';
import { ProductBase, ProductsCustom, ProductExtend } from 'types/products';

import cl from './cardList.module.css';

type Props = {
  productsList: ProductBase[] | ProductExtend[] | ProductsCustom[];
};

export const CardList = ({ productsList }: Props) => {
  return (
    <ul className={cl.cardList}>
      {productsList.map((el) => (
        <ProductCardPreview key={el.id} card={el} />
      ))}
    </ul>
  );
};
