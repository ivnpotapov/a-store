import { dataAlfaMade, dataExtend, dataGroups } from 'mocks/mockData';
import { getMadeInAlfa, getProductById, getYourDesign } from 'services/productServices';

describe('ProductService', () => {
  test('getMadeInAlfa', async () => {
    const res = await getMadeInAlfa();

    expect(res).toEqual(dataAlfaMade.products);
  });

  test('getYourDesign', async () => {
    const res = await getYourDesign();

    expect(res).toEqual(dataGroups.groups);
  });

  test('getProductById', async () => {
    const res = await getProductById('1');

    expect(res).toEqual(dataExtend.products[1]);
  });
});
