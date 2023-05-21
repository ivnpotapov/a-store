import { Button } from '@alfalab/core-components/button';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';

import { SelectProductOption } from 'components/pages/productCardPage/selectProductOption';
import { TEXT, FORM_PRODUCT } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'store';
import { cartActions } from 'store/cart';
import { currentProductSelector } from 'store/products';
import { ProductFormInputs } from 'types';
import { getCartItemFromInputs } from 'utils';

import cl from './formProduct.module.css';

const COLORS_TEXT = FORM_PRODUCT.colors;
const SIZES_TEXT = FORM_PRODUCT.sizes;
const STICKER_TEXT = FORM_PRODUCT.stickerNumbers;
const MODELS_TEXT = FORM_PRODUCT.models;
const { buttonSubmit } = TEXT.productCardPage;

export const FormProduct = () => {
  const dispatch = useAppDispatch();
  const { id, title, preview, colors, sizes, stickerNumbers, models, price, availability } =
    useAppSelector(currentProductSelector);

  const methodsProductForm = useForm<ProductFormInputs>({
    mode: 'onChange',
  });

  const { handleSubmit, reset } = methodsProductForm;

  const onSubmit: SubmitHandler<ProductFormInputs> = (inputsData) => {
    const inputsDataForCart = getCartItemFromInputs(inputsData, colors);

    const productForCart = {
      id,
      title,
      preview,
      price,
      count: 1,
      ...inputsDataForCart,
    };

    dispatch(cartActions.addProduct(productForCart));
    reset();
  };

  return (
    <FormProvider {...methodsProductForm}>
      <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
        {!!colors && (
          <SelectProductOption
            inputName={COLORS_TEXT.inputName}
            inputLabel={COLORS_TEXT.inputLabel}
            inputErrorText={COLORS_TEXT.inputErrorText}
          />
        )}

        {!!sizes && (
          <SelectProductOption
            inputName={SIZES_TEXT.inputName}
            inputLabel={SIZES_TEXT.inputLabel}
            inputErrorText={SIZES_TEXT.inputErrorText}
          />
        )}

        {!!stickerNumbers && (
          <SelectProductOption
            inputName={STICKER_TEXT.inputName}
            inputLabel={STICKER_TEXT.inputLabel}
            inputErrorText={STICKER_TEXT.inputErrorText}
          />
        )}

        {!!models && (
          <SelectProductOption
            inputName={MODELS_TEXT.inputName}
            inputLabel={MODELS_TEXT.inputLabel}
            inputErrorText={MODELS_TEXT.inputErrorText}
          />
        )}

        <Button view='primary' type='submit' disabled={!availability}>
          {buttonSubmit}
        </Button>
      </form>
    </FormProvider>
  );
};
