import { memo } from 'react';

import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';

import { getCartLabels } from 'utils';

type Props = {
  title: string;
  color: string | undefined;
  size: string | undefined;
  stickerNumber: string | undefined;
  model: string | undefined;
};

export const CartItemText = memo(({ title, color, size, stickerNumber, model }: Props) => {
  const { colorText, sizeText, stickerText, modelText } = getCartLabels(
    color,
    size,
    stickerNumber,
    model
  );

  return (
    <Space size={1} fullWidth>
      <Typography.Text view='primary-small' weight='bold'>
        {title}
      </Typography.Text>

      {!!color && <Typography.Text view='secondary-small'>{colorText}</Typography.Text>}

      {!!size && <Typography.Text view='secondary-small'>{sizeText}</Typography.Text>}

      {!!stickerNumber && <Typography.Text view='secondary-small'>{stickerText}</Typography.Text>}

      {!!model && <Typography.Text view='secondary-small'>{modelText}</Typography.Text>}
    </Space>
  );
});
