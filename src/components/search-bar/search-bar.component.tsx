import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import SearchBarInput from '../search-bar-input/search-bar-input.component';
import SearchSuggestionsDropdown from '../search-suggestions-dropdown/search-suggestions-dropdown.component';
import { SearchBarContainer, SearchContainer } from './search-bar.styles';

const SearchBar = () => {
  const defaultSearchField = {
    search: ''
  };
  const [searchField, setSearchField] = useState(defaultSearchField);
  const [searchSuggestionShow, setSearchSuggestionShow] = useState(false);
  const { search } = searchField;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchField({ ...searchField, [name]: value });
  };
  const navigate = useNavigate();
  const handleFocus = () => {
    setSearchSuggestionShow(true);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setSearchSuggestionShow(false);
    }, 200);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?q=${search}`);
  };
  return (
    <SearchBarContainer>
      <form onSubmit={handleSubmit}>
        <SearchContainer>
          <SearchBarInput
            label='Поиск'
            name='search'
            value={search}
            onChange={handleChange}
            required
            onBlur={handleBlur}
            onFocus={handleFocus}
            type='search'
          />
          {searchSuggestionShow && <SearchSuggestionsDropdown searchString={search} />}
        </SearchContainer>
        <Button type='submit'>Поиск</Button>
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;
