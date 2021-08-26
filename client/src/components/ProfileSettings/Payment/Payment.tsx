import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY;
console.log(publishableKey);
const secretKey = process.env.REACT_APP_SECRET_KEY;

const stripeTestPromise = loadStripe(publishableKey as any);

const Payment = (): JSX.Element => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
};

export default Payment;
