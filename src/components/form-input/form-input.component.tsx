import { InputHTMLAttributes } from 'react';
import { DaDataAddress, DaDataSuggestion } from 'react-dadata';
import { Path, UseFormRegister, ValidationRule } from 'react-hook-form';
import { ErrorMessage } from '../contact-info/contact-info.styles';
import { FormInputLabel, Group, Input, RequiredSign } from './form-input.styles';
export type FormInputValues = {
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
  displayName: string;
  confirmPassword: string;
};
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
  error?: string;
  register: UseFormRegister<FormInputValues>;
  rules: ValidationRules;
} & InputHTMLAttributes<HTMLInputElement>;
export const FormInput = ({
  label,
  name,
  register,
  uncontrolledValue,
  error,
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
          {required && <RequiredSign>{'*'}</RequiredSign>}
        </FormInputLabel>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Group>
  );
};

export default FormInput;
