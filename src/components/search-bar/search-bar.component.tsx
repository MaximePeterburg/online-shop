import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import SearchBarInput from '../search-bar-input/search-bar-input.component';
import { SearchBarContainer } from './search-bar.styles';

const SearchBar = () => {
  const defaultSearchField = {
    search: ''
  };
  const [searchField, setSearchField] = useState(defaultSearchField);
  const { search } = searchField;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchField({ ...searchField, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?q=${search}`);
  };
  return (
    <SearchBarContainer>
      <form onSubmit={handleSubmit}>
        <SearchBarInput
          label='Поиск'
          name='search'
          value={search}
          onChange={handleChange}
          required
          type='search'></SearchBarInput>
        <Button type='submit'>Поиск</Button>
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;
