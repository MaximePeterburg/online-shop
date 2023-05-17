import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../../store/categories/category.selector';
import { createSearchedItems } from '../../store/search/search.actions';
import { selectSearchItems } from '../../store/search/search.selector';
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
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createSearchedItems(products, search));
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
