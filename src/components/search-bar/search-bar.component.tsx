import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { searchProducts } from '../../store/search/search.actions';
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
  const categoriesMap = useSelector(selectCategoriesMap);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchProducts(categoriesMap, search));
    navigate('/search');
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
        <Button>Поиск</Button>
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;
