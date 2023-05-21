import { Link } from '@alfalab/core-components/link';
import { Typography } from '@alfalab/core-components/typography';
import { Link as LinkRouter } from 'react-router-dom';

import { ROUTES, TEXT } from 'constants/index';

import cl from './footer.module.css';

const { copyright, policy } = TEXT.footer;

export const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className={cl.wrap}>
        <Typography.Text tag='span' view='secondary-small' weight='regular' color='tertiary'>
          {copyright}
        </Typography.Text>

        <Typography.Text tag='span' view='secondary-small' weight='regular' color='tertiary'>
          <Link Component={LinkRouter} href={ROUTES.policy} view='secondary'>
            {policy}
          </Link>
        </Typography.Text>
      </div>
    </footer>
  );
};
