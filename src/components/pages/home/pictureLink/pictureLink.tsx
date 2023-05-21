import { Typography } from '@alfalab/core-components/typography';
import { Link } from 'react-router-dom';

import { COLORS_ALFALAB } from 'constants/index';

import cl from './pictureLink.module.css';

type Props = {
  to: string;
  src: string;
  text: string;
  testId: string;
};

export const PictureLink = ({ to, src, text, testId }: Props) => {
  return (
    <Link className={cl.link} to={to} data-test-id={testId}>
      <picture className={cl.imgWrap}>
        <img className={cl.img} src={src} alt={text} />
      </picture>
      <Typography.Title
        className={cl.text}
        tag='div'
        color={COLORS_ALFALAB.primary}
        view='medium'
        weight='bold'
      >
        {text}
      </Typography.Title>
    </Link>
  );
};
