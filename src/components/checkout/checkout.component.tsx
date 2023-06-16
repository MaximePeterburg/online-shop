import { MouseEventHandler, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { createOrderStart } from '../../store/order/order.actions';
import { selectOrderItem } from '../../store/order/order.selector';
import { OrderItem } from '../../store/order/order.types';
import { selectCurrentUser } from '../../store/user/user.selector';
import Button from '../button/button.component';
import { CheckoutItem } from '../checkout-item/checkout-item.component';
import { default as ContactInfo } from '../contact-info/contact-info.component';
import PaymentForm from '../payment-form/payment-form.component';
import {
  CheckoutContainer,
  CloseButton,
  HeaderBlock,
  HeaderContainer,
  ModalHeader,
  PaymentModal,
  Total
} from './checkout.styles';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderItem = useSelector(selectOrderItem);
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const modalRef = useRef<HTMLDialogElement>(null);
  const handleOpenModal = () => {
    if (modalRef.current && currentUser) {
      modalRef.current.showModal();
    }
  };
  const handleBackdropClick: MouseEventHandler<HTMLDialogElement> = (e) => {
    const modalDimensions = modalRef.current?.getBoundingClientRect();
    if (
      modalRef.current &&
      modalDimensions &&
      (e.clientX < modalDimensions.left ||
        e.clientX > modalDimensions.right ||
        e.clientY < modalDimensions.top ||
        e.clientY > modalDimensions.bottom)
    ) {
      modalRef.current.close();
    }
  };
  const handleClose = () => {
    modalRef.current?.close();
  };
  const handleNavigation = () => navigate('/auth');

  return (
    <CheckoutContainer>
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
      {currentUser ? (
        <>
          <ContactInfo />
          <Button onClick={handleOpenModal}>Продолжить Оформление</Button>
          <PaymentModal ref={modalRef} onClick={handleBackdropClick}>
            <ModalHeader>
              <CloseButton onClick={handleClose}>X</CloseButton>
            </ModalHeader>
            <PaymentForm />
          </PaymentModal>
        </>
      ) : (
        <Button onClick={handleNavigation}>Войдите</Button>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
