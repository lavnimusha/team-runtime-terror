import { useState } from 'react';
import useStyles from './useStyles';
import image from '../../../Images/credit-card-front.svg';
import { Button, Card, Typography, Paper } from '@material-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const Payment = (): JSX.Element => {
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe!.createPaymentMethod({
      type: 'card',
      card: elements!.getElement(CardElement)!,
    });

    if (!error) {
      try {
        const { id } = paymentMethod!;
        const response = await axios.post('http://localhost:3001/profile/payment', {
          amount: 1000,
          id,
        });
        if (response.data.success) {
          console.log('Successfully paid');
          setSuccess(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(error.message);
    }
  };

  const handleClick = () => {
    setOpen(true);
    <CardElement />;
  };

  return (
    <Paper elevation={5} className={classes.paymentPaper}>
      <Typography variant="h5" className={classes.paymentHeader}>
        Payment Methods
      </Typography>
      <Card className={classes.paymentCard}>
        <Typography variant="subtitle1" className={classes.paymentText}>
          Saved Payment Profiles:
        </Typography>
        <Paper elevation={1} className={classes.customerSingleCard}>
          {/* <PaymentIcon fontSize="large" color="primary" /> */}
          <img src={image} alt="credit card" className={classes.sampleCard} />
          <Typography className={classes.noCard}>You have no cards saved!</Typography>
          <Typography>Add a payment method below for a speedy checkout.</Typography>
        </Paper>
        {!success ? (
          <form action="/" method="POST" className={classes.form} onSubmit={handleSubmit}>
            {/* <CardElement /> */}
            <Button
              type="submit"
              variant="outlined"
              onClick={handleClick}
              fullWidth
              className={classes.cardButton}
              classes={{
                root: classes.buttonRoot,
              }}
            >
              Add new payment profile
            </Button>
          </form>
        ) : (
          <>You have added a card successfully</>
        )}
      </Card>
    </Paper>
  );
};

export default Payment;
