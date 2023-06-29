import { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { Subscription } from 'react-hook-form/dist/utils/createSubject';
import { FormInputLabel, Group, Input, InputError } from './form-input.styles';
export type FormInputValues = {
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
  displayName: string;
  confirmPassword: string;
};
export type ValidationRules = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
};
export type FormInputProps = {
  name: Path<FormInputValues>;
  label: string;
  // inputValue: string;
  register: UseFormRegister<FormInputValues>;
  rules: ValidationRules;
} & InputHTMLAttributes<HTMLInputElement>;
export const FormInput = ({
  label,
  name,
  register,
  // inputValue,
  rules: { required, minLength, maxLength, pattern },
  ...otherProps
}: FormInputProps) => {
  return (
    <Group>
      <Input
        {...register(name, { required, minLength, maxLength, pattern })}
        {...otherProps}
      />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.defaultValue ||
              (otherProps.value &&
                typeof otherProps.value === 'string' &&
                otherProps.value.length)
          )}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
