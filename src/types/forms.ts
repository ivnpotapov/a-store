export type SelectOption = {
  key: string;
  content: string;
};

export type InputSelect = {
  selected: SelectOption;
};

export type ProductFormInputs = {
  colors: InputSelect;
  sizes: InputSelect;
  stickerNumbers: InputSelect;
  models: InputSelect;
};

export type CartFormInputs = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  delivery: string;
  promoCode: string;
  policy: boolean;
  comment: string;
  payment: string;
};

export type InputType =
  | 'number'
  | 'text'
  | 'tel'
  | 'email'
  | 'card'
  | 'money'
  | 'password'
  | undefined;

export type RadioOption = { label: string; value: string };
