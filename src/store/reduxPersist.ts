import { combineReducers } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { SagaMiddleware } from 'redux-saga';

import { burgerReducer } from './burger';
import { cartReducer } from './cart';
import { notificationsReducer } from './notifications';
import { productsReducer } from './products';

export const rootReducer = combineReducers({
  burger: burgerReducer,
  products: productsReducer,
  cart: cartReducer,
  notifications: notificationsReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['cart'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

type PersistedReducerState = Exclude<Parameters<typeof persistedReducer>[0], undefined>;

export const getPersistMiddleware =
  (sagaMiddleware: SagaMiddleware<object>) =>
  (getDefaultMiddleware: CurriedGetDefaultMiddleware<PersistedReducerState>) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware);
