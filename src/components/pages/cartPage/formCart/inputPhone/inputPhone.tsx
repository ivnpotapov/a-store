import { PhoneInput } from '@alfalab/core-components/phone-input';
import { useController, useFormContext } from 'react-hook-form';

type Props = {
  inputName: string;
  inputLabel: string;
  placeholder?: string;
};

export const InputPhone = ({ inputName, inputLabel, placeholder }: Props) => {
  const { control } = useFormContext();

  const {
    field: { value, onChange, onBlur, name },
    fieldState: { error },
  } = useController({
    name: inputName,

    control,
  });

  return (
    <PhoneInput
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      block={true}
      label={inputLabel}
      labelView='outer'
      size='m'
      error={error?.message}
      value={value}
      placeholder={placeholder}
    />
  );
};
