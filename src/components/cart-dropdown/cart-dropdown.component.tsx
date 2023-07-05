import { useEffect, useRef } from 'react';
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      )
        dispatch(switchIsCartOpen(isCartOpen));
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  const handleClose = () => dispatch(switchIsCartOpen(isCartOpen));
  const cartCount = useSelector(selectCartCount);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <CartDropdownContainer ref={dropdownRef}>
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
