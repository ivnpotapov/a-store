import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import {
  isLoadingAlfaMadeSelector,
  productsActions,
  productsAlfaMadeSelector,
} from 'store/products';

export const useProductsAlfaMade = () => {
  const dispatch = useAppDispatch();
  const productsAlfaMade = useAppSelector(productsAlfaMadeSelector);
  const isLoadingAlfaMade = useAppSelector(isLoadingAlfaMadeSelector);

  useEffect(() => {
    const isProductsListEmpty = productsAlfaMade.length === 0;

    if (isProductsListEmpty) {
      dispatch(productsActions.requestAlfaMade());
    }
  }, [dispatch, productsAlfaMade.length]);

  return { productsAlfaMade, isLoadingAlfaMade };
};
