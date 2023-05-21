import { memo } from 'react';

import { Link } from '@alfalab/core-components/link';
import { Typography } from '@alfalab/core-components/typography';
import { Link as LinkRouter } from 'react-router-dom';

import { COLORS_ALFALAB, ROUTES, TEST_ID, TEXT } from 'constants/index';

export const Logo = memo(() => {
  return (
    <Typography.Title tag='div' color={COLORS_ALFALAB.accent} weight='bold' view='xlarge'>
      <Link
        href={ROUTES.index}
        Component={LinkRouter}
        underline={false}
        style={{ color: 'inherit' }}
        data-test-id={TEST_ID.header.logo}
      >
        {TEXT.header.logo}
      </Link>
    </Typography.Title>
  );
});
