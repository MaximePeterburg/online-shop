import { CategoryItem } from '../../store/categories/category.types';
import { translatePathPart } from '../../utils/util/util.utils';
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
        <Title to={title}>{translatePathPart(title).toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
