import { Textarea } from '@alfalab/core-components/textarea';
import { useController, useFormContext } from 'react-hook-form';

import { TEST_ID } from 'constants/index';

type Props = {
  inputName: string;
  inputLabel: string;
  placeholder?: string;
};

export const InputTextarea = ({ inputName, inputLabel, placeholder }: Props) => {
  const { control } = useFormContext();

  const {
    field: { value, onChange, onBlur, name },
    fieldState: { error },
  } = useController({
    name: inputName,
    control,
  });

  return (
    <Textarea
      name={name}
      resize='vertical'
      minRows={2}
      onChange={onChange}
      onBlur={onBlur}
      block={true}
      label={inputLabel}
      labelView='outer'
      size='m'
      error={error?.message}
      value={value}
      placeholder={placeholder ?? ''}
      dataTestId={TEST_ID.cart.formTextarea}
    />
  );
};
