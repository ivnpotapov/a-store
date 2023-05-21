import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

export const productsAlfaMadeSelector = (state: RootState) => state.products.productsAlfaMade;

export const isLoadingAlfaMadeSelector = (state: RootState) => state.products.isLoadingAlfaMade;

export const productsGroupSelector = (state: RootState) => state.products.productsGroup;

export const isLoadingGroupSelector = (state: RootState) => state.products.isLoadingGroup;

export const currentProductSelector = (state: RootState) => state.products.currentProduct;

export const isLoadingCurrentProductSelector = (state: RootState) =>
  state.products.isLoadingCurrentProduct;

export const isEmptyCurrentProductSelector = (state: RootState) =>
  state.products.isEmptyCurrentProduct;

export const productImgSelector = (state: RootState) => state.products.productImg;

export const productByIdSelector = createSelector(
  [
    (state: RootState) => state.products.productsMap,
    (state: RootState, id: string | undefined) => id ?? 0,
  ],

  (productsMap, id) => productsMap[id]
);
