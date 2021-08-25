import { useState } from 'react';
import useStyles from './useStyles';
import image from '../../../Images/credit-card-front.svg';
import { Button, Card, Typography, Paper, Box } from '@material-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { CARD_OPTIONS } from '../../../helpers/APICalls/paymentHelpers';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const Payment = (): JSX.Element => {
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log('submitted');
    const { error, paymentMethod } = await stripe!.createPaymentMethod({
      type: 'card',
      card: elements!.getElement(CardElement)!,
    });

    if (!error) {
      try {
        const { id } = paymentMethod!;
        const response = await axios.post('http://localhost:3001/profile/payment', JSON.stringify({ id }));
        if (response.data) {
          console.log('Successfully added');
          setSuccess(true);
        }

        // const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
        // const paymentMethods = await stripe.paymentMethods.list({
        //   customer: id,
        //   type: 'card',
        // });
        // console.log(paymentMethods);
      } catch (error) {
        console.log(error);
      }
      setOpen(false);
    } else {
      console.log(error.message);
      setError(`${error.message} Please try again!`);
      setOpen(true);
    }
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
        {!success ? (
          <Paper elevation={1} className={classes.customerSingleCard}>
            <img src={image} alt="credit card" className={classes.sampleCard} />
            <Typography className={classes.noCard}>You have no cards saved!</Typography>
            <Typography>Add a payment method below for a speedy checkout.</Typography>
          </Paper>
        ) : (
          <h2>Successfully added card!</h2>
        )}
        <Button
          // type="submit"
          variant="outlined"
          onClick={() => setOpen(true)}
          fullWidth
          className={classes.cardButton}
          classes={{
            root: classes.buttonRoot,
          }}
        >
          Add new payment profile
        </Button>
      </Card>
      <form action="/" method="POST" className={classes.form} onSubmit={handleSubmit}>
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Credit Card Details</DialogTitle>
          <DialogContent>
            <DialogContentText>Please enter your credit card number, expiry date and security code!</DialogContentText>
            <CardElement options={CARD_OPTIONS} className={classes.cardElement} />
          </DialogContent>
          <Box>
            <ErrorOutlineIcon className={classes.errorIcon} />
            <Typography className={classes.errorText}>{error}</Typography>
          </Box>

          <DialogActions>
            <Button color="primary" type="submit" onClick={handleSubmit}>
              Add Card
            </Button>
            <Button onClick={() => setOpen(false)} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </Paper>
  );
};

export default Payment;
