export type CartItem = {
  id: number;
  title: string;
  preview: string;
  count: number;
  price: number;
  color?: string;
  size?: string;
  stickerNumber?: string;
  model?: string;
};

export type CartList = { [key: string]: CartItem };

export type Delivery = {
  label: string;
  price: number;
};

export type CartType = {
  cartList: CartList;
  isCartIconVisible: boolean;
  isCartOpen: boolean;
  totalPrice: number;
  isTooltipCartAdd: boolean;
  countProducts: number;
  isCartFormVisible: boolean;
  delivery: Delivery;
};
