import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap
} from '../../store/categories/category.selector';
import { selectSortedCategoryItems } from '../../store/sorting/sorting.store';
import { translateRoutePart } from '../../utils/util/util.utils';
import { ProductCard } from '../product-card/product-card.component';
import SortSelector from '../sort-selector/sort-selector.component';
import Spinner from '../spinner/spinner.component';
import { CategoryContainer, Title } from './category-page.styles';

export type CategoryPageRouteParams = {
  category: string;
};
const CategoryPage = () => {
  const { category } = useParams<
    keyof CategoryPageRouteParams
  >() as CategoryPageRouteParams;
  // select categories
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const sortedCategoryItems = useSelector(selectSortedCategoryItems);
  // add state for products from categories
  const initialProductsState = categoriesMap[category];
  const [products, setProducts] = useState(initialProductsState);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  const isNotAFirstRender = useRef(false);
  useEffect(() => {
    isNotAFirstRender.current
      ? setProducts(sortedCategoryItems)
      : (isNotAFirstRender.current = true);
  }, [sortedCategoryItems]);

  return (
    <>
      <Title>{translateRoutePart(category).toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SortSelector products={products} />
          <CategoryContainer>
            {products &&
              products.map((product) => (
                <ProductCard product={product} key={product.id}></ProductCard>
              ))}
          </CategoryContainer>
        </>
      )}
    </>
  );
};

export default CategoryPage;
