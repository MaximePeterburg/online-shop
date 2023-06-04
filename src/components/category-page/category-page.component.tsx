import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { ProductCard } from '../product-card/product-card.component';
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
  // add state for products from categories
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
      </CategoryContainer>
    </>
  );
};

export default CategoryPage;
