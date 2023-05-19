import { InputHTMLAttributes } from 'react';
import { FormInputLabel, Input } from '../form-input/form-input.styles';
import { SearchBarGroup, SearchInput } from './search-bar-input.styles';

export type SearchBarInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchBarInput = ({ label, ...otherProps }: SearchBarInputProps) => {
  return (
    <SearchBarGroup>
      <SearchInput autoComplete='off' {...otherProps}></SearchInput>
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
    </SearchBarGroup>
  );
};

export default SearchBarInput;
