import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { CategoryItem } from '../../store/categories/category.types';
import { getCategoryByItemId } from '../../utils/util/util.utils';
import {
  SearchSuggestionContainer,
  SearchSuggestionLink,
  SuggestionImageContainer,
  SuggestionName
} from './search-suggestion.styles';

type SearchSuggestionProps = {
  suggestionItem: CategoryItem;
};

const SearchSuggestion = ({ suggestionItem }: SearchSuggestionProps) => {
  const categoryMap = useSelector(selectCategoriesMap);
  const { id, imageUrl, name } = suggestionItem;
  const category = getCategoryByItemId(categoryMap, id);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/shop/${category}/${id}`);
  };
  return (
    <SearchSuggestionContainer onClick={handleClick}>
      <SuggestionImageContainer>
        <img src={imageUrl} />
      </SuggestionImageContainer>
      <SuggestionName>{name}</SuggestionName>
    </SearchSuggestionContainer>
  );
};

export default SearchSuggestion;
