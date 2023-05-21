import { colorMapEnRu } from 'constants/colors';
import { TEXT } from 'constants/index';
import { cartMock } from 'mocks/mockData';
import { ProductFormInputs } from 'types/forms';
import {
  getOptionsObjFromArray,
  getCartItemFromInputs,
  getNumberWithSpace,
  getCartLabels,
} from 'utils';

const [key5] = Object.keys(cartMock);
const colors = ['white', 'black', 'red'];

describe('helpers', () => {
  test('getCartItemFromInputs', () => {
    const inputValues = {
      colors: { selected: { key: '0', content: 'белый' } },
      sizes: { selected: { key: '1', content: 'l' } },
      stickerNumbers: { selected: { key: '2', content: '2' } },
      models: { selected: { key: '2', content: '2' } },
    };

    const result = {
      color: 'white',
      size: 'l',
      stickerNumber: '2',
      model: '2',
    };

    expect(getCartItemFromInputs(inputValues, colors)).toEqual(result);
    expect(getCartItemFromInputs({} as ProductFormInputs, colors)).toEqual({});
  });

  test('getOptionsObjFromArray', () => {
    const result = [
      { key: '0', content: 'white' },
      { key: '1', content: 'black' },
      { key: '2', content: 'red' },
    ];

    expect(getOptionsObjFromArray(colors)).toEqual(result);
    expect(getOptionsObjFromArray('colors')).toEqual([]);
  });

  test('getNumberWithSpace', () => {
    expect(getNumberWithSpace(1000)).toEqual('1 000');
    expect(getNumberWithSpace(999999)).toEqual('999 999');
  });

  test('getCartLabels', () => {
    const { color, size, stickerNumber, model } = cartMock[key5];
    const { colorLabel, sizeLabel, stickerLabel, modelLabel } = TEXT.cart;
    const colorRu = colorMapEnRu[color as keyof typeof colorMapEnRu];

    const colorText = `${colorLabel}: ${colorRu}`;
    const sizeText = `${sizeLabel}: ${size}`;
    const stickerText = `${stickerLabel}: ${stickerNumber}`;
    const modelText = `${modelLabel}: ${model}`;

    const res = { colorText, sizeText, stickerText, modelText };

    expect(getCartLabels(color, size, stickerNumber, model)).toEqual(res);
  });
});
