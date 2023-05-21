import { TEXT } from 'constants/index';
import { useAppSelector } from 'store';
import { currentProductSelector } from 'store/products';

const { text } = TEXT.customDesign;
const SEPARATOR = '. ';

export const useCustomProduct = () => {
  const { description, stickerNumbers } = useAppSelector(currentProductSelector);

  const isCustomProduct = !!stickerNumbers;

  let abstract;
  if (isCustomProduct) {
    abstract = description.split(SEPARATOR).slice(0, 3).join(SEPARATOR);
  } else {
    abstract = description;
  }
  return { abstract, text, isCustomProduct };
};
