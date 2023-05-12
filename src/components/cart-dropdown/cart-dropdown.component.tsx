import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal
} from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { Total } from '../checkout/checkout.styles';
import {
  CartDropdownContainer,
  CartItems,
  CartTotal,
  EmptyMessage,
  Footer
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/checkout');
  };
  const cartCount = useSelector(selectCartCount);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
          ))
        ) : (
          <EmptyMessage>Ваша корзина пуста</EmptyMessage>
        )}
      </CartItems>
      <Footer>
        Итого ({cartCount} товаров): <CartTotal>{cartTotal} &#8381;</CartTotal>
      </Footer>
      <Button onClick={handleNavigation}>Корзина</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
