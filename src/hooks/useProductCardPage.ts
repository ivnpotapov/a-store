import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store';
import {
  currentProductSelector,
  isLoadingCurrentProductSelector,
  productByIdSelector,
  productsActions,
} from 'store/products';

export const useProductCardPage = () => {
  const { productIdRoute } = useParams();
  const dispatch = useAppDispatch();

  const productCached = useAppSelector((state) => productByIdSelector(state, productIdRoute));
  const { title, price, description, stickerNumbers } = useAppSelector(currentProductSelector);
  const isLoadingCurrentProduct = useAppSelector(isLoadingCurrentProductSelector);

  useEffect(() => {
    if (productIdRoute && !productCached) {
      dispatch(productsActions.requestCurrentProduct(productIdRoute));
    } else if (productCached) {
      dispatch(productsActions.setCurrentProduct(productCached));
    }
  }, [dispatch, productIdRoute, productCached]);

  return { title, price, description, stickerNumbers, isLoadingCurrentProduct };
};
