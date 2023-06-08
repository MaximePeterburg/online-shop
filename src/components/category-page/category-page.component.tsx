import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap
} from '../../store/categories/category.selector';
import { translateRoutePart } from '../../utils/util/util.utils';
import { ProductCard } from '../product-card/product-card.component';
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
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <Title>{translateRoutePart(category).toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard product={product} key={product.id}></ProductCard>
            ))}
        </CategoryContainer>
      )}
    </>
  );
};

export default CategoryPage;
