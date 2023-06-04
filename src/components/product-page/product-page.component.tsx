import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { CategoryItem } from '../../store/categories/category.types';
import { getItemFromDocuments } from '../../utils/firebase/firebase.utils';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { Arrow } from '../checkout-item/checkout-item.styles';
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
  const productPromise = getItemFromDocuments(parseInt(id));
  let product: CategoryItem;
  productPromise.then((item) => {
    product = item;
  });
  const { name, price, imageUrl } = product;
  const existingCartItem = cartItems.find((item) => item.name === product.name);
  const dispatch = useDispatch();
  const removeItem = () => {
    existingCartItem && dispatch(removeItemFromCart(cartItems, existingCartItem));
  };
  const addItem = () => {
    existingCartItem && dispatch(addItemToCart(cartItems, existingCartItem));
  };
  const addProductToCart = () => {
    if (product) {
      dispatch(addItemToCart(cartItems, product));
    }
  };
  return (
    <ProductPageContainer>
      <ProductPageImageContainer>
        <img src={imageUrl} alt={name}></img>
      </ProductPageImageContainer>
      <ProductDescription>
        <h1>{name}</h1>
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
  );
};

export default ProductPage;
