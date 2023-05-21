import { RootState } from '..';

export const cartListSelector = (state: RootState) => state.cart.cartList;

export const cartListKeysSelector = (state: RootState) => Object.keys(state.cart.cartList);

export const cartItemSelector = (state: RootState, id: string) => state.cart.cartList[id];

export const isCartIconVisibleSelector = (state: RootState) => state.cart.isCartIconVisible;

export const isCartOpenSelector = (state: RootState) => state.cart.isCartOpen;

export const isCartFormVisibleSelector = (state: RootState) => state.cart.isCartFormVisible;

export const totalPriceSelector = (state: RootState) => state.cart.totalPrice;

export const isTooltipCartAddSelector = (state: RootState) => state.cart.isTooltipCartAdd;

export const countProductsSelector = (state: RootState) => state.cart.countProducts;

export const deliverySelector = (state: RootState) => state.cart.delivery;
