import { memo, useEffect } from 'react';

import { Radio } from '@alfalab/core-components/radio';
import { RadioGroup } from '@alfalab/core-components/radio-group';
import { useController, useFormContext } from 'react-hook-form';

import { FORM_CART } from 'constants/index';
import { useAppDispatch } from 'store';
import { cartActions } from 'store/cart';
import { RadioOption } from 'types';

type Props = {
  inputName: string;
  inputLabel: string;
  radioList: RadioOption[];
};

export const InputRadio = ({ inputName, inputLabel, radioList = [] }: Props) => {
  const RadioMemo = memo(Radio);

  const dispatch = useAppDispatch();
  const { control } = useFormContext();

  const isPayment = inputName === FORM_CART.payment.inputName;
  const defaultConfig = isPayment ? radioList[0].value : undefined;

  const {
    field: { value, onChange, onBlur, name },
    fieldState: { error },
  } = useController({
    name: inputName,
    defaultValue: defaultConfig,
    control,
  });

  useEffect(() => {
    const isDeliveryInput = inputName === FORM_CART.delivery.inputName;
    const isDeliverySelected = value && isDeliveryInput;
    if (isDeliverySelected) {
      dispatch(cartActions.changeDelivery(value));
    }
  }, [dispatch, inputName, value]);

  return (
    <RadioGroup
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      label={inputLabel}
      error={error?.message}
      value={value}
    >
      {radioList.map(({ label, value }) => (
        <RadioMemo key={label} label={label} value={value} size='m' />
      ))}
    </RadioGroup>
  );
};
