import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCategoriesItems,
  selectCategoriesMap
} from '../../store/categories/category.selector';
import { CategoryItem } from '../../store/categories/category.types';
import SearchSuggestion from '../search-suggestion/search-suggestion.component';
import { SearchSuggestionsContainer } from './search-suggestions-dropdown.styles';

export type SearchSuggestionDropdownProps = {
  searchString: string;
};
const SearchSuggestionsDropdown = ({ searchString }: SearchSuggestionDropdownProps) => {
  const categoriesItems = useSelector(selectCategoriesItems);
  const [suggestionItems, setSuggestionItems] = useState<CategoryItem[]>([]);
  useEffect(() => {
    const newCategoriesItems = categoriesItems.filter((categoriesItem, idx) =>
      categoriesItem.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
    );
    setSuggestionItems(newCategoriesItems);
  }, [searchString]);
  return (
    <SearchSuggestionsContainer>
      {suggestionItems
        .filter((_, idx) => idx < 5)
        .map((suggestionItem) => (
          <SearchSuggestion key={suggestionItem.id} suggestionItem={suggestionItem} />
        ))}
    </SearchSuggestionsContainer>
  );
};

export default SearchSuggestionsDropdown;
