import { useSelector } from 'react-redux';
import { selectSearchItems } from '../../store/search/search.selector';
import { ProductCard } from '../product-card/product-card.component';
import { SearchBarContainer } from '../search-bar/search-bar.styles';
import { SearchResultsContainer } from './search-result.styles';

const SearchResults = () => {
  const searchItems = useSelector(selectSearchItems);
  return (
    <SearchResultsContainer>
      {searchItems.map((searchItem) => (
        <ProductCard product={searchItem}></ProductCard>
      ))}
    </SearchResultsContainer>
  );
};

export default SearchResults;
