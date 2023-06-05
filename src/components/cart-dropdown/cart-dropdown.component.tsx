import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { switchIsCartOpen } from '../../store/cart/cart.actions';
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
  selectIsCartOpen
} from '../../store/cart/cart.selector';
import { getGoodsForm } from '../../utils/util/util.utils';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {
  CartDropdownContainer,
  CartItems,
  CartTotal,
  CloseDropdown,
  EmptyMessage,
  Footer,
  Header
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const handleNavigation = () => {
    dispatch(switchIsCartOpen(isCartOpen));
    navigate('/checkout');
  };
  const handleClose = () => dispatch(switchIsCartOpen(isCartOpen));
  const cartCount = useSelector(selectCartCount);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <CartDropdownContainer>
      <Header>
        <span>Добавлено: {cartCount} шт.</span>
        <CloseDropdown onClick={handleClose}>Закрыть</CloseDropdown>
      </Header>
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
        Итого ({cartCount} {getGoodsForm(cartCount)}):
        <CartTotal>{cartTotal} &#8381;</CartTotal>
      </Footer>
      <Button onClick={handleNavigation}>Корзина</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
