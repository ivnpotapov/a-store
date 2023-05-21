import { Space } from '@alfalab/core-components/space';
import { Spinner } from '@alfalab/core-components/spinner';
import { Typography } from '@alfalab/core-components/typography';

import { ProductsSection } from 'components/pages/customDesign/productsSection';
import { TitleSection } from 'components/titleSection/titleSection';
import { TEXT } from 'constants/index';
import { useProductsGroups } from 'hooks/useProductsGroups';

import cl from './customDesign.module.css';

const { customDesign } = TEXT.pages;
const { subTitle, text } = TEXT.customDesign;

export const CustomDesign = () => {
  const { productsGroup, isLoadingGroup } = useProductsGroups();

  return (
    <Space className={cl.wrap} fullWidth>
      <TitleSection titleTag='h1' title={customDesign} subtitle={subTitle} />

      {isLoadingGroup ? (
        <Spinner visible={isLoadingGroup} className={cl.loader} size='m' />
      ) : (
        productsGroup.map((el) => {
          return <ProductsSection key={String(el.id)} id={el.id} />;
        })
      )}

      <Typography.Text view='primary-large' className={cl.text} color='tertiary'>
        {text}
      </Typography.Text>
    </Space>
  );
};
