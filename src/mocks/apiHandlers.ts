import { rest } from 'msw';

import { apiParameters, apiRoutes } from 'services/apiConstants';

import { dataAlfaMade, dataExtend, dataGroups } from './mockData';

const { baseUrl } = apiParameters;
const { yourDesign, madeInAlfa, product } = apiRoutes;

const getMadeInAlfaMock = rest.get(`${baseUrl}/${madeInAlfa}`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(dataAlfaMade.products));
});

const getYourDesignMock = rest.get(`${baseUrl}/${yourDesign}`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(dataGroups.groups));
});

const getProductByIdMock = rest.get(`${baseUrl}/${product}/:id`, (req, res, ctx) => {
  const { id } = req.params;
  return res(ctx.status(200), ctx.json(dataExtend.products[Number(id)]));
});

export const apiHandlers = [getMadeInAlfaMock, getYourDesignMock, getProductByIdMock];
