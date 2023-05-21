import { memo, useCallback, useMemo } from 'react';

import { Notification } from '@alfalab/core-components/notification';
import { NotificationManager } from '@alfalab/core-components/notification-manager';

import { useAppDispatch, useAppSelector } from 'store';
import { notificationsActions, notificationsSelector } from 'store/notifications';

export const NotificationWrap = () => {
  const dispatch = useAppDispatch();
  const NotificationManagerMemo = memo(NotificationManager);
  const NotificationMemo = memo(Notification);

  const notificationsPropsList = useAppSelector(notificationsSelector);
  const notificationsList = useMemo(
    () =>
      notificationsPropsList.map((el) => {
        return <NotificationMemo {...el} key={el.id} />;
      }),
    [notificationsPropsList, NotificationMemo]
  );

  const removeNotification = useCallback(
    (id: string) => {
      dispatch(notificationsActions.remove(id));
    },
    [dispatch]
  );

  return (
    <NotificationManagerMemo
      notifications={notificationsList}
      onRemoveNotification={removeNotification}
    />
  );
};
