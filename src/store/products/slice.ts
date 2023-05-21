import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentProduct, ProductsMap, ProductExtend, ProductGroup } from 'types/products';

type ProductsType = {
  productsAlfaMade: ProductExtend[];
  isLoadingAlfaMade: boolean;
  hasErrorAlfaMade: boolean;
  productsGroup: ProductGroup[];
  isLoadingGroup: boolean;
  hasErrorGroup: boolean;
  currentProduct: CurrentProduct;
  isLoadingCurrentProduct: boolean;
  hasErrorCurrentProduct: boolean;
  isEmptyCurrentProduct: boolean;
  productImg: string;
  productsMap: ProductsMap;
};

export const productsInitialState: ProductsType = {
  productsAlfaMade: [],
  isLoadingAlfaMade: false,
  hasErrorAlfaMade: false,
  productsGroup: [],
  isLoadingGroup: false,
  hasErrorGroup: false,
  currentProduct: {} as CurrentProduct,
  isLoadingCurrentProduct: false,
  hasErrorCurrentProduct: false,
  isEmptyCurrentProduct: false,
  productImg: '',
  productsMap: {},
};

const NAME = 'products';

const requestAlfaMade: CaseReducer<ProductsType> = (state) => {
  state.isLoadingAlfaMade = true;
  state.hasErrorAlfaMade = false;
};

const failureAlfaMade: CaseReducer<ProductsType> = (state) => {
  state.isLoadingAlfaMade = false;
  state.hasErrorAlfaMade = true;
};

const setProductsAlfaMade: CaseReducer<ProductsType, PayloadAction<ProductExtend[]>> = (
  state,
  { payload }
) => {
  state.isLoadingAlfaMade = false;
  state.productsAlfaMade = payload;
};

const requestGroup: CaseReducer<ProductsType> = (state) => {
  state.isLoadingGroup = true;
  state.hasErrorGroup = false;
};

const failureGroup: CaseReducer<ProductsType> = (state) => {
  state.isLoadingGroup = false;
  state.hasErrorGroup = true;
};

const setProductsGroup: CaseReducer<ProductsType, PayloadAction<ProductGroup[]>> = (
  state,
  { payload }
) => {
  state.isLoadingGroup = false;
  state.productsGroup = payload;
};

const requestCurrentProduct: CaseReducer<ProductsType, PayloadAction<string>> = (state) => {
  state.isLoadingCurrentProduct = true;
  state.hasErrorCurrentProduct = false;
};

const setEmptyCurrentProduct: CaseReducer<ProductsType> = (state) => {
  state.isEmptyCurrentProduct = true;
};

const resetEmptyCurrentProduct: CaseReducer<ProductsType> = (state) => {
  state.isEmptyCurrentProduct = false;
};

const failureCurrentProduct: CaseReducer<ProductsType> = (state) => {
  state.isLoadingCurrentProduct = false;
  state.hasErrorCurrentProduct = true;
};

const setCurrentProduct: CaseReducer<ProductsType, PayloadAction<CurrentProduct>> = (
  state,
  { payload }
) => {
  state.isLoadingCurrentProduct = false;
  state.currentProduct = payload;
  if (payload?.images) {
    state.productImg = payload.images[0];
  }

  state.productsMap[payload.id] = payload;
};

const setProductImg: CaseReducer<ProductsType, PayloadAction<string>> = (state, { payload }) => {
  state.productImg = payload;
};

export const { actions: productsActions, reducer: productsReducer } = createSlice({
  name: NAME,
  initialState: productsInitialState,
  reducers: {
    requestAlfaMade,
    failureAlfaMade,
    setProductsAlfaMade,
    setProductsGroup,
    requestGroup,
    failureGroup,
    setCurrentProduct,
    requestCurrentProduct,
    failureCurrentProduct,
    setEmptyCurrentProduct,
    resetEmptyCurrentProduct,
    setProductImg,
  },
});
