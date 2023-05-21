import { Space } from '@alfalab/core-components/space';
import { Spinner } from '@alfalab/core-components/spinner';

import { CardList } from 'components/cardList';
import { TitleSection } from 'components/titleSection';
import { TEXT, TEST_ID } from 'constants/index';
import { useProductsAlfaMade } from 'hooks/useProductsAlfaMade';

import cl from './alfaMade.module.css';

export const AlfaMade = () => {
  const { productsAlfaMade, isLoadingAlfaMade } = useProductsAlfaMade();

  return (
    <Space className={cl.wrap} fullWidth>
      <TitleSection titleTag='h1' title={TEXT.pages.alfaMade} subtitle={TEXT.alfaMade.subTitle} />

      {isLoadingAlfaMade ? (
        <Spinner
          visible={isLoadingAlfaMade}
          className={cl.loader}
          size='m'
          dataTestId={TEST_ID.common.loader}
        />
      ) : (
        <CardList productsList={productsAlfaMade} />
      )}
    </Space>
  );
};
