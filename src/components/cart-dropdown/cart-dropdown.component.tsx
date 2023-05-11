import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/checkout');
  };
  const cartItems = useSelector(selectCartItems);
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
      <Button onClick={handleNavigation}>Корзина</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
