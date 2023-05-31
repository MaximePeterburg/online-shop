import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { PaymentFormContainer } from './payment-form.styles';

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement =>
  card !== null;

const PaymentForm = () => {
  const amount = useSelector(selectCartTotal) * 100;
  const currentUser = useSelector(selectCurrentUser);
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const paymentHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
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
          name: currentUser ? currentUser.displayName : 'Guest'
        }
      }
    });
    setIsProcessingPayment(false);
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('payment successful');
      }
    }
  };
  return (
    <PaymentFormContainer onSubmit={paymentHandler}>
      <h2>Оплата картой:</h2>
      <CardElement></CardElement>
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
