import { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister, ValidationRule } from 'react-hook-form';
import { FormInputLabel, Group, Input, InputError } from './form-input.styles';
export type FormInputValues = {
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
  displayName: string;
  confirmPassword: string;
};
// export type ValidationRule = {
//   value: string | boolean | number | RegExp;
//   message: string;
// };
export type ValidationRules = {
  required?: ValidationRule<boolean>;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
  pattern?: RegExp;
};
export type FormInputProps = {
  name: Path<FormInputValues>;
  label: string;
  uncontrolledValue?: string;
  register: UseFormRegister<FormInputValues>;
  rules: ValidationRules;
} & InputHTMLAttributes<HTMLInputElement>;
export const FormInput = ({
  label,
  name,
  register,
  uncontrolledValue,
  rules: { required, minLength, maxLength, pattern },
  ...otherProps
}: FormInputProps) => {
  const fieldValue = otherProps.value ? otherProps.value : uncontrolledValue;
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
              (fieldValue && typeof fieldValue === 'string' && fieldValue.length)
          )}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
