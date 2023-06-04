import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

export const getGoodsForm = (goodsCount: number) => {
  let goodsForm;
  switch (goodsCount) {
    case 1:
      goodsForm = 'товар';
      break;
    case 2:
    case 3:
    case 4:
      goodsForm = 'товара';
      break;
    default:
      goodsForm = 'товаров';
      break;
  }
  return goodsForm;
};
export const getProducts = () => {
  const categoryMap = useSelector(selectCategoriesMap);
  return Object.values(categoryMap).flatMap((categoryItems) => categoryItems);
};
