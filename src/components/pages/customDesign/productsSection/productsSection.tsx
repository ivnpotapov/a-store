import { CardList } from 'components/cardList';
import { TitleSection } from 'components/titleSection';
import { useAppSelector } from 'store';
import { productsGroupSelector } from 'store/products';

type Props = {
  id: number;
};

export const ProductsSection = ({ id }: Props) => {
  const productsGroup = useAppSelector(productsGroupSelector);
  const { title, description, products } = productsGroup[id];

  return (
    <>
      <TitleSection title={title} subtitle={description} titleColor='accent' />

      <CardList productsList={products} />
    </>
  );
};
