import axios from 'axios';

import { apiParameters, apiRoutes } from './apiConstants';
import { ProductExtend, ProductsCustom } from '../types/products';

const instanceProductAxios = axios.create({
  baseURL: `${apiParameters.baseUrl}/`,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
});

export const getMadeInAlfa = async (): Promise<ProductExtend[]> => {
  const route = `/${apiRoutes.madeInAlfa}`;
  const result = await instanceProductAxios.get(route);
  return result.data;
};

export const getYourDesign = async (): Promise<ProductsCustom[]> => {
  const route = `/${apiRoutes.yourDesign}`;
  const result = await instanceProductAxios.get(route);
  return result.data;
};

export const getProductById = async (productId: string): Promise<ProductsCustom> => {
  const route = `/${apiRoutes.product}/${productId}`;
  const result = await instanceProductAxios.get(route);
  return result.data;
};
