import { InputHTMLAttributes } from 'react';
import { FormInputLabel, Group, Input } from './form-input.styles';

export type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;
export const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  return (
    <Group>
      <Input {...otherProps}></Input>
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
