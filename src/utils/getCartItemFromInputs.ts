import { ProductFormInputs } from 'types/forms';

export const getCartItemFromInputs = (
  inputsData: ProductFormInputs,
  colors: string[] | undefined
) => {
  let res = {};
  const isInputsEmpty = !Object.keys(inputsData).length;

  if (!isInputsEmpty) {
    const colorIdx = Number(inputsData.colors?.selected.key);
    const color = colors && colors[colorIdx];

    const size = inputsData.sizes?.selected?.content;
    const stickerNumber = inputsData.stickerNumbers?.selected.content;
    const model = inputsData.models?.selected.content;

    res = {
      color,
      size,
      stickerNumber,
      model,
    };
  }

  return res;
};
