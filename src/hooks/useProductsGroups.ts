import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import { isLoadingGroupSelector, productsActions, productsGroupSelector } from 'store/products';

export const useProductsGroups = () => {
  const dispatch = useAppDispatch();
  const productsGroup = useAppSelector(productsGroupSelector);
  const isLoadingGroup = useAppSelector(isLoadingGroupSelector);

  useEffect(() => {
    const isListsEmpty = productsGroup.length === 0;

    if (isListsEmpty) {
      dispatch(productsActions.requestGroup());
    }
  }, [dispatch, productsGroup.length]);

  return { productsGroup, isLoadingGroup };
};
