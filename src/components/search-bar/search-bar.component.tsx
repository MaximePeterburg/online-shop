import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../button/button.component';
import SearchBarInput from '../search-bar-input/search-bar-input.component';
import { SearchBarContainer } from './search-bar.styles';

const SearchBar = () => {
  const defaultFormFields = {
    search: ''
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { search } = formFields;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <SearchBarContainer>
      <form onSubmit={handleSubmit}>
        <SearchBarInput
          label='search'
          name='search'
          value={search}
          onChange={handleChange}
          required
          type='search'></SearchBarInput>
        <Button>Search</Button>
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;
