export const ROUTES = {
  index: '/',
  alphaMade: '/alpha-made',
  customDesign: '/custom-design',
  contact: '/contact',
  cart: '/cart',
  policy: '/policy',
  page404: '/page404',
  any: '/*',
  productId: '/:productIdRoute',
} as const;

export type ValueOfRoutes = (typeof ROUTES)[keyof typeof ROUTES];

export const BREAK_POINT_MOBILE = 640;
