import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap
} from '../../store/categories/category.selector';
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
  // add state for products from categories
  const initialProductsState = categoriesMap[category];
  const [products, setProducts] = useState(initialProductsState);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    let sortedProducts = [...products];
    const { value } = event.target;
    if (value === 'price-ascening') sortedProducts.sort((a, b) => a.price - b.price);
    if (value === 'price-descending') sortedProducts.sort((a, b) => b.price - a.price);
    if (value === 'newest-first') sortedProducts = initialProductsState.reverse();
    setProducts(sortedProducts);
  };
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
