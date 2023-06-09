import { CategoryItem } from '../../store/categories/category.types';
import { translateRoutePart } from '../../utils/util/util.utils';
import { ProductCard } from '../product-card/product-card.component';
import {
  CategoryLink,
  CategoryPreviewContainer,
  Header,
  Preview,
  Title
} from './category-preview.styles';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

function CategoryPreview({ title, products }: CategoryPreviewProps) {
  return (
    <CategoryPreviewContainer>
      <Header>
        <Title>{translateRoutePart(title)}</Title>
        <CategoryLink to={title}>Показать ещё</CategoryLink>
      </Header>
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
