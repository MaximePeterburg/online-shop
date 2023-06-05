import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchedProductsStart } from '../../store/search/search.actions';
import {
  selectSearchIsLoading,
  selectSearchItems
} from '../../store/search/search.selector';
import { Title } from '../category-page/category-page.styles';
import { ProductCard } from '../product-card/product-card.component';
import Spinner from '../spinner/spinner.component';
import { ResultsContainer, SearchResults } from './search.styles';
export type SearchRouteParams = {
  search: string;
};
const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const searchItems = useSelector(selectSearchItems);
  const searchIsLoading = useSelector(selectSearchIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (query) {
      dispatch(fetchSearchedProductsStart(query));
    }
  }, [query]);
  return (
    <>
      {searchIsLoading ? (
        <Spinner />
      ) : (
        <SearchResults>
          {searchItems.length > 0 ? (
            <Title>
              Результаты поиска: <span style={{ color: '#d50032' }}>{query}</span>
            </Title>
          ) : (
            <Title>
              По запросу <span style={{ color: '#d50032' }}>{query}</span> ничего не
              найдено
            </Title>
          )}
          <ResultsContainer>
            {searchItems.map((searchItem) => (
              <ProductCard product={searchItem} key={searchItem.id}></ProductCard>
            ))}
          </ResultsContainer>
        </SearchResults>
      )}
    </>
  );
};

export default Search;
