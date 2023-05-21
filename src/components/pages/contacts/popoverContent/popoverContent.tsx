import { Space } from '@alfalab/core-components/space';
import { CommentWithTextMIcon } from '@alfalab/icons-glyph/CommentWithTextMIcon';
import { MailMIcon } from '@alfalab/icons-glyph/MailMIcon';

import { Icon } from 'components/page/header/burgerMenu/icon';
import { TEXT, TEST_ID } from 'constants/index';

export const PopoverContent = () => {
  return (
    <Space size='s' direction='vertical'>
      <Icon
        IconComponent={MailMIcon}
        href={`mailto:${TEXT.contacts.email}`}
        dataTestId={TEST_ID.burger.emailLink}
        mainBgColor='#ef3124'
      />
      <Icon
        IconComponent={CommentWithTextMIcon}
        href={TEXT.contacts.wa}
        dataTestId={TEST_ID.burger.waLink}
        mainBgColor='#ef3124'
      />
    </Space>
  );
};
