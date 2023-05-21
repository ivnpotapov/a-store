import { memo } from 'react';

import { TitleProps, Typography } from '@alfalab/core-components/typography';

type Props = {
  title: string;
  subtitle?: string;
  titleTag?: TitleProps['tag'];
  titleColor?: TitleProps['color'];
};

export const TitleSection = memo(
  ({ title, subtitle, titleTag = 'h2', titleColor = 'primary' }: Props) => {
    return (
      <>
        <Typography.TitleResponsive tag={titleTag} color={titleColor} weight='bold' view='xlarge'>
          {title}
        </Typography.TitleResponsive>

        {!!subtitle && <Typography.Text view='primary-large'>{subtitle}</Typography.Text>}
      </>
    );
  }
);
