import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { CheckoutItem } from '../checkout-item/checkout-item.component';
import {
  CheckoutContainer,
  HeaderBlock,
  HeaderContainer,
  Total
} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  return (
    <CheckoutContainer>
      <HeaderContainer>
        <HeaderBlock>
          <span>Товар</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Описание</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Количество</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Цена</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Убрать</span>
        </HeaderBlock>
      </HeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
      ))}
      <Total>Итого: {total} &#8381;</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
