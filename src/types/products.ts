export interface ProductBase {
  id: number;
  preview: string;
  title: string;
  price: number;
  availability: boolean;
}

export interface ListProductsBase {
  products: ProductBase[];
}

export interface ProductExtend extends ProductBase {
  images: string[];
  description: string;
  sizes?: string[];
  colors?: string[];
  models?: string[];
}

export interface ProductsCustom extends ProductExtend {
  subtitle: string;
  stickerNumbers: number[];
}

export interface ListDataExtend {
  products: ProductExtend[];
  customProducts: ProductsCustom[];
}

export interface ProductGroup {
  id: number;
  title: string;
  description: string;
  products: ProductsCustom[];
}

export interface ListProductGroup {
  groups: ProductGroup[];
}

export type CurrentProduct = ProductExtend & Partial<ProductsCustom>;

export type ProductsMap = { [key: string]: ProductExtend };
