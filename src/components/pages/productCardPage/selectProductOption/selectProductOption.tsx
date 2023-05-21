import { useEffect } from 'react';

import { Select } from '@alfalab/core-components/select';
import { useController, useFormContext } from 'react-hook-form';

import { colorMapEnRu, FORM_PRODUCT } from 'constants/index';
import { useAppDispatch, useAppSelector } from 'store';
import { currentProductSelector, productsActions } from 'store/products';
import { CurrentProduct } from 'types/products';
import { getOptionsObjFromArray } from 'utils';

type Props = {
  inputName: keyof CurrentProduct;
  inputLabel: string;
  inputErrorText: string;
};

export const SelectProductOption = ({ inputName, inputLabel, inputErrorText }: Props) => {
  const dispatch = useAppDispatch();
  const currentProduct = useAppSelector(currentProductSelector);
  const inputOptionsArray = currentProduct[inputName];
  const inputOptions = getOptionsObjFromArray(inputOptionsArray, colorMapEnRu);

  const { control } = useFormContext();

  const {
    field: { value, onChange, onBlur, name },
    fieldState: { error },
  } = useController({
    name: inputName,
    rules: { required: inputErrorText },
    defaultValue: { selected: inputOptions[0] },
    control,
  });

  useEffect(() => {
    const currentColorIdx = Number(value.selected.key);

    if (inputName === FORM_PRODUCT.colors.inputName) {
      dispatch(productsActions.setProductImg(currentProduct.images[currentColorIdx]));
    }
  }, [dispatch, value, inputName, currentProduct.images]);

  return (
    <Select
      name={name}
      options={inputOptions}
      onChange={onChange}
      onBlur={onBlur}
      label={inputLabel}
      multiple={false}
      labelView='outer'
      size='m'
      error={error?.message}
      selected={value.selected}
    />
  );
};
