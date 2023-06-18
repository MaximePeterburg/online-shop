import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import Button from '../button/button.component';
import { CheckoutItem } from '../checkout-item/checkout-item.component';
import { default as ContactInfo } from '../contact-info/contact-info.component';
import {
  CheckoutContainer,
  CheckoutItemsContainer,
  ContactInfoContainer,
  HeaderBlock,
  HeaderContainer,
  ToAuthConainer,
  Total
} from './checkout.styles';

const Checkout = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const handleNavigation = () => navigate('/auth');
  return (
    <CheckoutContainer>
      <CheckoutItemsContainer>
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
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <Total>Итого: {total} &#8381;</Total>
      </CheckoutItemsContainer>
      <ContactInfoContainer>
        {currentUser ? (
          <ContactInfo />
        ) : (
          <ToAuthConainer>
            <h2>Войти или зарегистрироваться</h2>
            <Button onClick={handleNavigation}>Войдите</Button>
          </ToAuthConainer>
        )}
      </ContactInfoContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
