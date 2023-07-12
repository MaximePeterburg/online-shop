import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../store/cart/cart.actions';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import { createOrderStart } from '../../store/order/order.actions';
import { selectContactInfo, selectOrderItem } from '../../store/order/order.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { PaymentFormContainer } from './payment-form.styles';

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement =>
  card !== null;

const PaymentForm = () => {
  const amount = useSelector(selectCartTotal) * 100;
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const contactInfo = useSelector(selectContactInfo);
  const { address, phoneNumber } = contactInfo;
  const orderItem = useSelector(selectOrderItem);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const paymentHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    if (!address || !(phoneNumber.length > 2)) {
      console.log(address);
      console.log(phoneNumber);
      alert('Заполните контактные данные');
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: amount })
    }).then((res) => res.json());
    const {
      paymentIntent: { client_secret }
    } = response;
    console.log(client_secret);
    const cardDetails = elements.getElement(CardElement);
    if (!ifValidCardElement(cardDetails)) return;
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
          address: {
            line1: address
          },
          phone: phoneNumber
        }
      }
    });
    setIsProcessingPayment(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
      console.log(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Оплата прошла успешно');
        const formedOrderItem = {
          ...orderItem,
          cartItems: cartItems,
          userId: currentUser!.id,
          userName: currentUser!.displayName
        };
        dispatch(createOrderStart(formedOrderItem));
        dispatch(setCartItems([]));
      }
    }
  };
  return (
    <PaymentFormContainer onSubmit={paymentHandler}>
      <h2>Оплата картой:</h2>
      <div style={{ color: 'red' }}>
        <div>Тестовые данные:</div>
        <span style={{ marginRight: '2rem' }}>4242 4242 4242 4242</span>
        <span style={{ marginRight: '1rem' }}>04/24</span>
        <span style={{ marginRight: '1rem' }}>424</span>
        <span style={{ marginRight: '1rem' }}>24242</span>
      </div>
      <CardElement />
      <Button
        style={{ marginLeft: 'auto' }}
        isLoading={isProcessingPayment}
        buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Оплатить
      </Button>
    </PaymentFormContainer>
  );
};
export default PaymentForm;
