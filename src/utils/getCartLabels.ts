import { colorMapEnRu, TEXT } from 'constants/index';

export const getCartLabels = (
  color: string | undefined,
  size: string | undefined,
  stickerNumber: string | undefined,
  model: string | undefined
) => {
  const { colorLabel, sizeLabel, stickerLabel, modelLabel } = TEXT.cart;

  const colorRu = colorMapEnRu[color as keyof typeof colorMapEnRu];

  const colorText = `${colorLabel}: ${colorRu}`;
  const sizeText = `${sizeLabel}: ${size}`;
  const stickerText = `${stickerLabel}: ${stickerNumber}`;
  const modelText = `${modelLabel}: ${model}`;

  return { colorText, sizeText, stickerText, modelText };
};
