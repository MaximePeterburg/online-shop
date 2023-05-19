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
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={title} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
