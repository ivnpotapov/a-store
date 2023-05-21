import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';
import { Link } from 'react-router-dom';

import { Price } from 'components/price';
import { ColorsLabel } from 'components/productCardPreview/colorsLabel';
import { OutOfStock } from 'components/productCardPreview/outOfStock';
import { StickersLabel } from 'components/productCardPreview/stickersLabel';
import { ProductBase, ProductsCustom } from 'types/products';

import cl from './productCardPreview.module.css';

type Props = { card: ProductBase & Partial<ProductsCustom> };

export const ProductCardPreview = ({ card }: Props) => {
  const { id, preview, title, price, availability, subtitle, colors, stickerNumbers } = card;

  return (
    <li>
      <Link className={cl.wrap} to={`/${id}`}>
        <picture className={cl.imgWrap}>
          <img className={cl.img} src={preview} alt={title} />
        </picture>

        <Space className={cl.body} size='m' fullWidth>
          <Typography.Title tag='h3' view='xsmall'>
            {title}
          </Typography.Title>

          {!!subtitle && (
            <Typography.Text view='secondary-medium' color='secondary'>
              {subtitle}
            </Typography.Text>
          )}

          <Price price={price} />
        </Space>

        {!!colors?.length && <ColorsLabel colors={colors} />}

        {!!stickerNumbers?.length && <StickersLabel count={stickerNumbers.length - 1} />}

        {!availability && <OutOfStock />}
      </Link>
    </li>
  );
};
