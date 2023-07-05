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
  RedirectConainer,
  Total
} from './checkout.styles';

const Checkout = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const handleAuthNavigation = () => navigate('/auth');
  const handleCatalogNavigation = () => navigate('/shop');

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
      {cartItems.length ? (
        <ContactInfoContainer>
          {currentUser ? (
            <ContactInfo />
          ) : (
            <RedirectConainer>
              <h2>Войти или зарегистрироваться</h2>
              <Button onClick={handleAuthNavigation}>Войдите</Button>
            </RedirectConainer>
          )}
        </ContactInfoContainer>
      ) : (
        <RedirectConainer>
          <h2 style={{ textAlign: 'center' }}>
            К сожалению, в настоящее время ваша корзина пуста.
          </h2>
          <Button onClick={handleCatalogNavigation}>Перейти в каталог</Button>
        </RedirectConainer>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
