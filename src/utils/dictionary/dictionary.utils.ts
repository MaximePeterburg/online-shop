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
