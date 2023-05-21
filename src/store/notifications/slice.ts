import { NotificationProps } from '@alfalab/core-components/notification';
import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

export type AddNotificationProps = NotificationProps & { id?: string };

export type NotificationsStateType = {
  notifications: NotificationProps[];
};

export const notificationsInitialState: NotificationsStateType = {
  notifications: [],
};

const NAME = 'notifications';

const success: CaseReducer<NotificationsStateType, PayloadAction<AddNotificationProps>> = (
  state,
  { payload: { title, children = '', id, autoCloseDelay = 3000 } }
) => {
  state.notifications.push({
    badge: 'positive',
    title,
    children,
    autoCloseDelay,
    id: id || v1(),
  });
};

const error: CaseReducer<NotificationsStateType, PayloadAction<AddNotificationProps>> = (
  state,
  { payload: { title, children = '', id, autoCloseDelay = 3000 } }
) => {
  state.notifications.push({
    badge: 'negative',
    title,
    children,
    autoCloseDelay,
    id: id || v1(),
  });
};

const neutral: CaseReducer<NotificationsStateType, PayloadAction<AddNotificationProps>> = (
  state,
  { payload: { title, children = '', autoCloseDelay = 3000, id } }
) => {
  state.notifications.push({
    title,
    children,
    autoCloseDelay,
    id: id || v1(),
  });
};

const remove: CaseReducer<NotificationsStateType, PayloadAction<string>> = (state, { payload }) => {
  state.notifications = state.notifications.filter((notification) => notification.id !== payload);
};

export const { reducer: notificationsReducer, actions: notificationsActions } = createSlice({
  name: NAME,
  initialState: notificationsInitialState,
  reducers: {
    success,
    error,
    neutral,
    remove,
  },
});
