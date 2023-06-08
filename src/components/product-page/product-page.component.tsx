import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import { fetchProductByIdStart } from '../../store/product/product.action';
import {
  selectProduct,
  selectProductIsLoading
} from '../../store/product/product.selector';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { Arrow } from '../checkout-item/checkout-item.styles';
import PagePath from '../page-path/page-path.component';
import Spinner from '../spinner/spinner.component';
import {
  DescriptionFooter,
  Price,
  ProductDescription,
  ProductPageContainer,
  ProductPageCounter,
  ProductPageImageContainer
} from './product-page.styles';

type ProductRouteParams = {
  id: string;
};

const ProductPage = () => {
  const { id } = useParams<keyof ProductRouteParams>() as ProductRouteParams;
  const cartItems = useSelector(selectCartItems);
  const isLoading = useSelector(selectProductIsLoading);
  const product = useSelector(selectProduct);
  const { name, price, imageUrl, description } = product;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductByIdStart(parseInt(id)));
  }, []);
  const existingCartItem = cartItems.find((item) => item.name === product.name);
  const removeItem = () =>
    existingCartItem && dispatch(removeItemFromCart(cartItems, existingCartItem));
  const addItem = () =>
    existingCartItem && dispatch(addItemToCart(cartItems, existingCartItem));
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductPageContainer>
          <ProductPageImageContainer>
            <img src={imageUrl} alt={name}></img>
          </ProductPageImageContainer>
          <ProductDescription>
            <h1>{name}</h1>
            <p>{description}</p>
            <DescriptionFooter>
              <Price>{price} &#8381;</Price>
              {!existingCartItem ? (
                <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.base}>
                  Добавить в Корзину
                </Button>
              ) : (
                <ProductPageCounter>
                  <Arrow onClick={removeItem}>-</Arrow>
                  {existingCartItem.quantity} шт.
                  <Arrow onClick={addItem}>+</Arrow>
                </ProductPageCounter>
              )}
            </DescriptionFooter>
          </ProductDescription>
        </ProductPageContainer>
      )}
    </>
  );
};

export default ProductPage;
