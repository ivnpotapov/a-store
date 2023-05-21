import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { deliveryPrices, FORM_CART } from 'constants/index';
import { CartItem, CartType } from 'types/cart';

export const cartInitialState: CartType = {
  cartList: {},
  isCartIconVisible: false,
  isCartOpen: false,
  totalPrice: 0,
  isTooltipCartAdd: false,
  countProducts: 0,
  isCartFormVisible: false,
  delivery: { label: FORM_CART.delivery.emptyDelivery, price: 0 },
};

const NAME = 'cart';

const addProduct: CaseReducer<CartType, PayloadAction<CartItem>> = (state, { payload }) => {
  const { id, color, size, stickerNumber, price } = payload;
  const key = `${id ?? ''}${color ?? ''}${size ?? ''}${stickerNumber ?? ''}`;

  const isProductInCart = !!state.cartList[key];
  if (isProductInCart) {
    state.cartList[key].count += 1;
  } else {
    state.cartList[key] = payload;
  }

  state.totalPrice += price;
  state.countProducts += 1;

  if (!state.isCartIconVisible) {
    state.isCartIconVisible = true;
  }

  state.isTooltipCartAdd = true;
};

const hidePriceTooltip: CaseReducer<CartType> = (state) => {
  state.isTooltipCartAdd = false;
};

const toggleCartOpen: CaseReducer<CartType> = (state) => {
  state.isCartOpen = !state.isCartOpen;
  state.isCartIconVisible = !state.isCartIconVisible;
};

const incrementCount: CaseReducer<CartType, PayloadAction<string>> = (state, { payload }) => {
  const { price } = state.cartList[payload];

  state.cartList[payload].count += 1;
  state.countProducts += 1;
  state.totalPrice += price;
};

const decrementCount: CaseReducer<CartType, PayloadAction<string>> = (state, { payload }) => {
  const { price } = state.cartList[payload];

  state.cartList[payload].count -= 1;
  state.countProducts -= 1;
  state.totalPrice -= price;

  const isProductEmpty = !state.cartList[payload].count;
  if (isProductEmpty) {
    delete state.cartList[payload];

    const isCartEmpty = !state.countProducts;
    if (isCartEmpty) {
      state.isCartIconVisible = false;
      state.isCartOpen = false;
      state.isCartFormVisible = false;
    }
  }
};

const removeProduct: CaseReducer<CartType, PayloadAction<string>> = (state, { payload }) => {
  const { count, price } = state.cartList[payload];

  state.countProducts -= count;
  state.totalPrice -= price * count;

  const isCartEmpty = !state.countProducts;
  if (isCartEmpty) {
    state.isCartIconVisible = false;
    state.isCartOpen = false;
    state.isCartFormVisible = false;
  }

  delete state.cartList[payload];
};

const showCartForm: CaseReducer<CartType> = (state) => {
  state.isCartFormVisible = true;
  state.isCartOpen = false;
};

const hideCartForm: CaseReducer<CartType> = (state) => {
  state.isCartFormVisible = false;

  const isCartEmpty = !state.countProducts;
  if (!isCartEmpty) {
    state.isCartIconVisible = true;
  }
};

const changeDelivery: CaseReducer<CartType, PayloadAction<string>> = (state, { payload }) => {
  state.delivery = deliveryPrices[payload as keyof typeof deliveryPrices];
};

export const { actions: cartActions, reducer: cartReducer } = createSlice({
  name: NAME,
  initialState: cartInitialState,
  reducers: {
    addProduct,
    hidePriceTooltip,
    incrementCount,
    decrementCount,
    removeProduct,
    toggleCartOpen,
    showCartForm,
    hideCartForm,
    changeDelivery,
  },
});
