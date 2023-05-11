import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { switchIsCartOpen } from '../../store/cart/cart.actions';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const count = useSelector(selectCartCount);
  const openCartDropdown = () => {
    dispatch(switchIsCartOpen(isCartOpen));
  };
  return (
    <CartIconContainer onClick={openCartDropdown}>
      <ShoppingIcon></ShoppingIcon>
      <ItemCount>{count}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
