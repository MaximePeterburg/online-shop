import { useSelector } from 'react-redux';
import { selectSearchItems } from '../../store/search/search.selector';
import { Title } from '../category/category.styles';
import { ProductCard } from '../product-card/product-card.component';
import { ResultsContainer, SearchResultsContainer } from './search.styles';

const Search = () => {
  const searchItems = useSelector(selectSearchItems);
  return (
    <>
      <SearchResultsContainer>
        {searchItems.length > 0 ? (
          <Title>Результаты поиска</Title>
        ) : (
          <Title>По вашему запросу ничего не найдено</Title>
        )}
        <ResultsContainer>
          {searchItems.map((searchItem) => (
            <ProductCard product={searchItem} key={searchItem.id}></ProductCard>
          ))}
        </ResultsContainer>
      </SearchResultsContainer>
    </>
  );
};

export default Search;
