import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { CategoryMap } from '../../store/categories/category.types';

const PATTERN = /\D/g;
export const normalizePhoneNumber = (value: string): string => {
  return value.replace(PATTERN, '');
};
export const RU_CODE_LENGTH = 2;
export const FORMATTED_RU_PHONE_LENGTH = 18;
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
export const translateRoutePart = (routePart: string) => {
  switch (routePart) {
    case 'shop':
      return 'Каталог';
    case 'men':
      return 'Мужская парфюмерия';
    case 'women':
      return 'Женская парфюмерия';
    case 'search':
      return 'Поиск';
    default:
      return 'ошибка';
  }
};
export const getCategoryByItemId = (categoriesMap: CategoryMap, id: number) => {
  let category: string;
  Object.keys(categoriesMap).flatMap((title) =>
    categoriesMap[title].find((item) => item.id === id && (category = title))
  );
  return category!;
};
