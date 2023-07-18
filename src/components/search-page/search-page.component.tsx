import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchedProductsStart } from '../../store/search/search.actions';
import {
  selectSearchIsLoading,
  selectSearchItems
} from '../../store/search/search.selector';
import { selectSortedCategoryItems } from '../../store/sorting/sorting.store';
import { Title } from '../category-page/category-page.styles';
import { redColor } from '../category-preview/category-preview.styles';
import { ProductCard } from '../product-card/product-card.component';
import SortSelector from '../sort-selector/sort-selector.component';
import Spinner from '../spinner/spinner.component';
import { ResultsContainer, SearchResults } from './search-page.styles';
export type SearchRouteParams = {
  search: string;
};
const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const searchItems = useSelector(selectSearchItems);
  const [products, setProducts] = useState(searchItems);
  const searchIsLoading = useSelector(selectSearchIsLoading);
  const sortedCategoriesItems = useSelector(selectSortedCategoryItems);
  const dispatch = useDispatch();
  useEffect(() => {
    if (query) {
      dispatch(fetchSearchedProductsStart(query));
    }
  }, [query]);
  useEffect(() => {
    setProducts(searchItems);
  }, [searchItems]);
  useEffect(() => {
    setProducts(sortedCategoriesItems);
  }, [sortedCategoriesItems]);
  return (
    <>
      {searchIsLoading ? (
        <Spinner />
      ) : (
        <SearchResults>
          {products.length > 0 ? (
            <Title>
              Результаты поиска: <span style={{ color: redColor }}>{query}</span>
            </Title>
          ) : (
            <Title>
              По запросу <span style={{ color: redColor }}>{query}</span> ничего не
              найдено
            </Title>
          )}
          <SortSelector products={products} />
          <ResultsContainer>
            {products.map((searchItem) => (
              <ProductCard product={searchItem} key={searchItem.id} />
            ))}
          </ResultsContainer>
        </SearchResults>
      )}
    </>
  );
};

export default Search;
