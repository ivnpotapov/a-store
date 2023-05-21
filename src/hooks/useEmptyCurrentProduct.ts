import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'store';
import { isEmptyCurrentProductSelector, productsActions } from 'store/products';

const { page404 } = ROUTES;

export const useEmptyCurrentProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isEmptyCurrentProduct = useAppSelector(isEmptyCurrentProductSelector);

  useEffect(() => {
    if (isEmptyCurrentProduct) {
      navigate(page404);
      dispatch(productsActions.resetEmptyCurrentProduct());
    }
  }, [dispatch, isEmptyCurrentProduct, navigate]);

  return {};
};
