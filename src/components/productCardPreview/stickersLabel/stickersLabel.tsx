import { Typography } from '@alfalab/core-components/typography';

import { TEXT } from 'constants/index';

import cl from './stickersLabel.module.css';

type Props = {
  count: number;
};

export const StickersLabel = ({ count }: Props) => {
  return (
    <Typography.Text className={cl.stickerText} view='secondary-small' color='tertiary'>
      {`${TEXT.customDesign.stickerText} ${count}`}
    </Typography.Text>
  );
};
