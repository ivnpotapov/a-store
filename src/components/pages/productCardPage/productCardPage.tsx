import { Space } from '@alfalab/core-components/space';
import { Spinner } from '@alfalab/core-components/spinner';
import { Typography } from '@alfalab/core-components/typography';

import { Price } from 'components/price';
import { TEST_ID } from 'constants/index';
import { useCustomProduct } from 'hooks/useCustomProduct';
import { useEmptyCurrentProduct } from 'hooks/useEmptyCurrentProduct';
import { useProductCardPage } from 'hooks/useProductCardPage';

import { FormProduct } from './formProduct';
import { GalleryProduct } from './galleryProduct';
import cl from './productCardPage.module.css';

export const ProductCardPage = () => {
  const { title, price, isLoadingCurrentProduct } = useProductCardPage();

  const { abstract, text, isCustomProduct } = useCustomProduct();

  useEmptyCurrentProduct();

  if (isLoadingCurrentProduct) {
    return (
      <Spinner
        visible={isLoadingCurrentProduct}
        className={cl.loader}
        size='m'
        dataTestId={TEST_ID.common.loader}
      />
    );
  }

  return (
    <>
      {!!title && (
        <Space className={cl.wrap} fullWidth>
          <GalleryProduct />

          <Space size='l' className={cl.wrapText}>
            <Typography.TitleResponsive tag='h1' view='small'>
              {title}
            </Typography.TitleResponsive>

            <Price price={price} dataTestId={TEST_ID.productCardPage.price} />

            <FormProduct />

            <Typography.Text view='secondary-medium'>{abstract}</Typography.Text>

            {isCustomProduct && <Typography.Text view='secondary-medium'>{text}</Typography.Text>}
          </Space>
        </Space>
      )}
    </>
  );
};
