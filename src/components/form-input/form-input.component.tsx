import { InputHTMLAttributes } from 'react';

export type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;
export const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input {...otherProps}></input>
    </div>
  );
};

export default FormInput;
