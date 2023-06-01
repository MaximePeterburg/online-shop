import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { ProductCard } from '../product-card/product-card.component';
import { CategoryContainer, Title } from './category.styles';

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  // select categories
  const categoriesMap = useSelector(selectCategoriesMap);
  // add state for products from categories
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  console.log(products);
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

export default Category;
