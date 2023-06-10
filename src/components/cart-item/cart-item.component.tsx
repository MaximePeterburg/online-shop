import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart
} from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem as TCartItem } from '../../store/cart/cart.types';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap
} from '../../store/categories/category.selector';
import { Arrow } from '../checkout-item/checkout-item.styles';
import Spinner from '../spinner/spinner.component';
import {
  CartItemContainer,
  CartItemCount,
  DeleteItemButton,
  ImageContainer,
  ItemDetails
} from './cart-item.styles';
export type CartItemProps = {
  cartItem: TCartItem;
};
const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, quantity, price, imageUrl, id } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading);
  const categoriesMap = useSelector(selectCategoriesMap);
  const categoryToNavigate = Object.keys(categoriesMap).find((category) =>
    categoriesMap[category].map((categoryItem) => {
      if (categoryItem.id === id) return true;
      return false;
    })
  );
  const handleNavigate = () => {
    navigate(`/shop/${categoryToNavigate}/${id}`);
  };
  const removeItem = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };
  const addItem = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };
  const clearItem = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };
  return (
    <CartItemContainer>
      <ImageContainer>
        {categoriesIsLoading ? (
          <Spinner />
        ) : (
          <img onClick={handleNavigate} src={imageUrl} alt={name}></img>
        )}
      </ImageContainer>
      <ItemDetails>
        <span style={{ cursor: 'pointer' }} onClick={handleNavigate}>
          {name}
        </span>
        <CartItemCount>
          <Arrow onClick={removeItem}>-</Arrow> {quantity}
          <Arrow onClick={addItem}>+</Arrow>
          <span style={{ color: '#d50032' }}>{price} &#8381;</span>
          <DeleteItemButton onClick={clearItem}>X</DeleteItemButton>
        </CartItemCount>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
