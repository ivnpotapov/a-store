import { Link } from '@alfalab/core-components/link';
import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';
import { Link as LinkRouter } from 'react-router-dom';

import { TitleSection } from 'components/titleSection';
import { ROUTES, TEST_ID, TEXT } from 'constants/index';

import cl from './contacts.module.css';
import { IconChat } from './iconChat';

const { email, tel, address, wakingDaysLabel, wakingDays, lastDaysLabel, lastDays, acceptPayment } =
  TEXT.contacts;

export const Contacts = () => {
  return (
    <>
      <div className={cl.wrap}>
        <TitleSection titleTag='h1' title={TEXT.pages.alfaMade} />

        <Space size='l'>
          <Space size={1}>
            <Typography.Text weight='medium'>{email}</Typography.Text>
            <Typography.Text weight='medium'>{tel}</Typography.Text>
          </Space>

          <Typography.Text weight='medium'>{address}</Typography.Text>

          <Space size={1}>
            <Typography.Text weight='medium'>{wakingDaysLabel}</Typography.Text>
            <Typography.Text weight='medium'>{wakingDays}</Typography.Text>
            <Typography.Text weight='medium'>{lastDaysLabel}</Typography.Text>
            <Typography.Text weight='medium'>{lastDays}</Typography.Text>
          </Space>

          <Typography.Text weight='medium'>{acceptPayment}</Typography.Text>

          <Typography.Text weight='medium'>
            <Link Component={LinkRouter} href={ROUTES.policy}>
              {TEXT.footer.policy}
            </Link>
          </Typography.Text>
        </Space>

        <Space fullWidth>
          <iframe
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A115a9b652845322e04ad41bcb456685bec2ce19a99ac6ac70f8907505ebf82d9&amp;source=constructor'
            height='350'
            width='100%'
            style={{ border: 0 }}
            data-test-id={TEST_ID.contacts.map}
          ></iframe>
        </Space>

        <IconChat />
      </div>
    </>
  );
};
