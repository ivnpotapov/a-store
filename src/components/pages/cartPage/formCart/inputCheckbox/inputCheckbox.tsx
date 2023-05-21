import { Checkbox } from '@alfalab/core-components/checkbox';
import { useController, useFormContext } from 'react-hook-form';

type Props = {
  inputName: string;
  inputLabel: string;
};

export const InputCheckbox = ({ inputName, inputLabel }: Props) => {
  const { control } = useFormContext();

  const {
    field: { value, onChange, onBlur, name },
    fieldState: { error },
  } = useController({
    name: inputName,
    defaultValue: false,
    control,
  });

  return (
    <Checkbox
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      block={true}
      label={inputLabel}
      size='m'
      error={error?.message}
      checked={value}
    />
  );
};
