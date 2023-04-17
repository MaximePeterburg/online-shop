import { CategoryItem } from '../../store/categories/category.types';
import { ProductCard } from '../product-card/product-card.component';
import { CategoryPreviewContainer, Preview, Title } from './category-preview.styles';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

function CategoryPreview({ title, products }: CategoryPreviewProps) {
  return (
    <CategoryPreviewContainer>
      <Title to={title}>{title.toUpperCase()}</Title>
      <Preview>
        {products.map((product) => (
          <ProductCard product={product} key={title} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
