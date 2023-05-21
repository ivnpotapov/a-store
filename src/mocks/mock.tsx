import { ReactElement } from 'react';

import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { burgerInitialState, burgerReducer } from 'store/burger';
import { cartInitialState, cartReducer } from 'store/cart';
import { notificationsInitialState, notificationsReducer } from 'store/notifications';
import { productsInitialState, productsReducer } from 'store/products';

export const commonInitialState = {
  burger: burgerInitialState,
  products: productsInitialState,
  cart: cartInitialState,
  notifications: notificationsInitialState,
};

const rootReducer = {
  burger: burgerReducer,
  products: productsReducer,
  cart: cartReducer,
  notifications: notificationsReducer,
};

export const withRouter = (component: ReactElement) =>
  render(<MemoryRouter>{component}</MemoryRouter>);

export const withRouterAndRedux = (component: ReactElement, initState = commonInitialState) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initState,
  });

  function Wrapper(): JSX.Element {
    return (
      <Provider store={store}>
        <MemoryRouter>{component}</MemoryRouter>
      </Provider>
    );
  }

  return {
    store,
    ...render(component, { wrapper: Wrapper }),
  };
};

export const withRouterParamsAndRedux = (
  component: ReactElement,
  initState = commonInitialState,
  initialEntries = '/',
  path = '/'
) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initState,
  });

  function Wrapper(): JSX.Element {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[initialEntries]}>
          <Routes>
            <Route path={path} element={component} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  }

  return {
    store,
    ...render(component, { wrapper: Wrapper }),
  };
};
