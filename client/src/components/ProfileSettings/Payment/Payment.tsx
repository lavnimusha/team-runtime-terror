import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const publishableKey = process.env.PUBLISHABLE_KEY;
const secretKey = process.env.SECRET_KEY;
const stripeTestPromise = loadStripe(
  'pk_test_51JRxZpFPiYWgYJZZYkfNjn42WcxdB1sRdCjm2rHd8IHu5PK2S1xRGA493brmlOGT8qfsbwTSHHbMCDetADwyyWSO003lEM8vz2',
);

const Payment = (): JSX.Element => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
};

export default Payment;
