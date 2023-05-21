import { ReactNode } from 'react';

import { Input } from '@alfalab/core-components/input';
import { useController, useFormContext } from 'react-hook-form';

import { InputType } from 'types';

import cl from './inputText.module.css';

type Props = {
  inputName: string;
  inputLabel: string;
  placeholder?: string;
  rightAddons?: ReactNode;
  type?: InputType;
};

export const InputText = ({
  inputName,
  inputLabel,
  placeholder,
  rightAddons,
  type = 'text',
}: Props) => {
  const { control } = useFormContext();

  const {
    field: { value, onChange, onBlur, name },
    fieldState: { error, isTouched, isDirty },
  } = useController({
    name: inputName,
    control,
  });

  const isRightAddons = (isDirty || isTouched) && rightAddons;

  return (
    <Input
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      block={true}
      label={inputLabel}
      labelView='outer'
      size='m'
      error={error?.message}
      value={value}
      placeholder={placeholder ?? ''}
      rightAddons={isRightAddons ? rightAddons : ''}
      addonsClassName={cl.addons}
    />
  );
};
