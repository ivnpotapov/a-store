import { Space } from '@alfalab/core-components/space';
import { CommentWithTextMIcon } from '@alfalab/icons-glyph/CommentWithTextMIcon';
import { MailMIcon } from '@alfalab/icons-glyph/MailMIcon';
import { PhoneMIcon } from '@alfalab/icons-glyph/PhoneMIcon';

import { Icon } from 'components/page/header/burgerMenu/icon';
import { TEXT, TEST_ID } from 'constants/index';

export const SocialIcons = () => {
  return (
    <Space size='s' direction='horizontal'>
      <Icon
        IconComponent={MailMIcon}
        href={`mailto:${TEXT.contacts.email}`}
        dataTestId={TEST_ID.burger.emailLink}
      />
      <Icon
        IconComponent={PhoneMIcon}
        href={`tel:${TEXT.contacts.tel}`}
        dataTestId={TEST_ID.burger.telLink}
      />
      <Icon
        IconComponent={CommentWithTextMIcon}
        href={TEXT.contacts.wa}
        dataTestId={TEST_ID.burger.waLink}
      />
    </Space>
  );
};
