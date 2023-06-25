import { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { FormInputLabel, Group, Input, InputError } from './form-input.styles';
export type FormInputValues = {
  address: string;
  phoneNumber: string;
};
export type ValidationRules = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
};
export type FormInputProps = {
  label: Path<FormInputValues>;
  register: UseFormRegister<FormInputValues>;
  rules: ValidationRules;
} & InputHTMLAttributes<HTMLInputElement>;
export const FormInput = ({
  label,
  register,
  rules: { required, minLength, maxLength, pattern },
  ...otherProps
}: FormInputProps) => {
  return (
    <Group>
      <Input
        {...register(label, { required, minLength, maxLength, pattern })}
        {...otherProps}
      />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
          )}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
