import { Button } from '@alfalab/core-components/button';
import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';
import { Link } from 'react-router-dom';

import { ROUTES, TEXT } from 'constants/index';

import cl from './notFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <Space className={cl.wrap} fullWidth>
      <Typography.TitleResponsive tag='div' color='primary' weight='bold' view='xlarge'>
        {TEXT.page404.errotText}
      </Typography.TitleResponsive>
      <Typography.TitleResponsive tag='div' color='primary' weight='bold' view='medium'>
        {TEXT.page404.mainText}
      </Typography.TitleResponsive>
      <Button size='l' view='primary' Component={Link} href={ROUTES.index}>
        {TEXT.page404.buttonText}
      </Button>
    </Space>
  );
};
