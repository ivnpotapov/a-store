import { Space } from '@alfalab/core-components/space';
import { Status } from '@alfalab/core-components/status';

import { TEXT } from 'constants/index';

import cl from './outOfStock.module.css';

export const OutOfStock = () => {
  return (
    <Space className={cl.overlay}>
      <Status view='contrast' color='grey'>
        {TEXT.alfaMade.outOfStock}
      </Status>
    </Space>
  );
};
