import { act, screen } from '@testing-library/react';
import { runSaga, Saga } from 'redux-saga';

import { AlfaMade } from 'components/pages/alfaMade';
import { TEXT, TEST_ID } from 'constants/index';
import { commonInitialState, withRouterAndRedux } from 'mocks/mock';
import { dataExtend, dataAlfaMade } from 'mocks/mockData';
import { getProductsAlfaMadeSaga, productsActions } from 'store/products';

const PRODUCT_FIRST = dataAlfaMade.products[0];
const PRODUCT_SECOND = dataAlfaMade.products[1];

describe('alfaMade', () => {
  test('render desktop', () => {
    const INIT_STATE = {
      ...commonInitialState,
      products: { ...commonInitialState.products, isSubtitleShown: true },
    };
    withRouterAndRedux(<AlfaMade />, INIT_STATE);

    expect(screen.getByText(TEXT.pages.alfaMade)).toBeInTheDocument();
    expect(screen.getByText(TEXT.alfaMade.subTitle)).toBeInTheDocument();
  });

  test('render loader', async () => {
    const { store } = withRouterAndRedux(<AlfaMade />);

    store.dispatch(productsActions.requestAlfaMade());

    expect(screen.getByTestId(TEST_ID.common.loader)).toBeInTheDocument();

    act(() => store.dispatch(productsActions.setProductsAlfaMade(dataExtend.products)));

    expect(screen.queryByTestId(TEST_ID.common.loader)).toBeNull();

    expect(screen.getByText(PRODUCT_FIRST.title)).toBeInTheDocument();
    expect(screen.getByAltText(PRODUCT_FIRST.title)).toBeInTheDocument();

    expect(screen.getByText(PRODUCT_SECOND.title)).toBeInTheDocument();
    expect(screen.getByAltText(PRODUCT_SECOND.title)).toBeInTheDocument();
  });

  test('render cards list', async () => {
    const { store } = withRouterAndRedux(<AlfaMade />);

    /* eslint-disable @typescript-eslint/no-explicit-any */
    await act(() => runSaga(store, getProductsAlfaMadeSaga as Saga<any[]>));

    expect(screen.getByText(PRODUCT_FIRST.title)).toBeInTheDocument();
    expect(screen.getByAltText(PRODUCT_FIRST.title)).toBeInTheDocument();

    expect(screen.getByText(PRODUCT_SECOND.title)).toBeInTheDocument();
    expect(screen.getByAltText(PRODUCT_SECOND.title)).toBeInTheDocument();
  });
});
