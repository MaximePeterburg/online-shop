import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../../store/cart/cart.types';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { getCategoryByItemId } from '../../utils/util/util.utils';
import {
  Footer,
  Name,
  OrderItemCardContainer,
  Price,
  Quantity
} from './order-item-card.styles';

type OrderItemCardProps = {
  orderCartItem: CartItem;
};

const OrderItemCard = ({ orderCartItem }: OrderItemCardProps) => {
  const { imageUrl, name, price, quantity, id } = orderCartItem;
  const navigate = useNavigate();
  const categoriesMap = useSelector(selectCategoriesMap);
  const category = getCategoryByItemId(categoriesMap, id);
  const handleNavigation = () => {
    navigate(`/shop/${category}/${id}`);
  };
  return (
    <OrderItemCardContainer>
      <img
        src={imageUrl}
        alt={name}
        onClick={handleNavigation}
        style={{ cursor: 'pointer' }}
      />
      <Footer>
        <Name>{name}</Name>
        <Price>{price} &#8381;</Price>
      </Footer>
      <Quantity>
        <b> {quantity} шт.</b>
      </Quantity>
    </OrderItemCardContainer>
  );
};

export default OrderItemCard;
