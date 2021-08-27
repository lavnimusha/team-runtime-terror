import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button, Card, Typography, Paper, Box } from '@material-ui/core';
import PaymentForm from './PaymentForm';
import { useAuth } from '../../../context/useAuthContext';
import axios from 'axios';
import useStyles from './useStyles';
import PaymentReUse from './PaymentReUse';

const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY;
console.log(publishableKey);
const secretKey = process.env.REACT_APP_SECRET_KEY;

const stripeTestPromise = loadStripe(publishableKey as any);

const Payment = (): JSX.Element => {
  const { loggedInUser } = useAuth();
  const [incomingData, setIncomingData] = useState({});
  const classes = useStyles();

  useEffect(() => {
    const handleIncomingCard = async () => {
      try {
        setIncomingData(await axios.post('http://localhost:3001/profile/payment', JSON.stringify(loggedInUser!.email)));
      } catch (err) {
        console.log(err);
      }
    };
    handleIncomingCard();
  }, [loggedInUser]);
  const newData = incomingData as any;
  console.log('new DAta is ', newData);
  return (
    <Elements stripe={stripeTestPromise}>
      {newData!.data === 'noCard' || newData!.data === 'registration' || newData!.data === undefined ? (
        <PaymentForm />
      ) : (
        <Paper elevation={5} className={classes.paymentPaper}>
          <Typography variant="h5" className={classes.paymentHeader}>
            Payment Methods
          </Typography>
          <Paper elevation={0} className={classes.customerSavedCard}>
            <Card className={classes.paymentCard}>
              <Typography variant="subtitle1" className={classes.paymentText}>
                Saved Payment Profiles:
              </Typography>
              <PaymentReUse
                brand={newData.data.cardType}
                last4={newData.data.lastDigits}
                expMonth={newData.data.expMonth}
                expYear={newData.data.expYear}
              />
            </Card>
          </Paper>
        </Paper>
      )}
    </Elements>
  );
};

export default Payment;
