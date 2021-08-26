import { useState } from 'react';
import useStyles from './useStyles';
import image from '../../../Images/credit-card-front.svg';
import { Button, Card, Typography, Paper, Box } from '@material-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { CARD_OPTIONS } from './useStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Payment = (): JSX.Element => {
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [cardDetail, setCardDetail] = useState({} as any);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe!.createPaymentMethod({
      type: 'card',
      card: elements!.getElement(CardElement)!,
    });

    if (!error) {
      setCardDetail(paymentMethod!.card as any);
      console.log(paymentMethod!.card);
      try {
        const { id } = paymentMethod!;
        const response = await axios.post('http://localhost:3001/profile/payment', JSON.stringify({ id }));
        if (response.data) {
          console.log('Successfully added');
          setSuccess(true);
        }
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
  const handleClose = () => {
    setOpen(false);
    setError('');
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
          <>
            <Typography className={classes.successText}>Successfully added the following card!</Typography>
            <Box className={classes.cardImage}>
              {cardDetail.brand == 'visa' ? (
                <i className="fab fa-cc-visa fa-5x visaCard"></i>
              ) : (
                <i className="fab fa-cc-mastercard fa-5x"></i>
              )}
            </Box>
            <Typography className={classes.successText}>**** **** **** {cardDetail.last4}</Typography>
            <Typography className={classes.successText}>
              Exp. Date {cardDetail.exp_month}/{cardDetail.exp_year}
            </Typography>
          </>
        )}
        <Button
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

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="lg">
        <form className={classes.form} onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Add Credit Card Details</DialogTitle>
          <DialogContent>
            <DialogContentText>Please enter your credit card number, expiry date and security code!</DialogContentText>
            <CardElement options={CARD_OPTIONS} className={classes.cardElement} />
          </DialogContent>
          <Typography className={classes.errorText}>{error}</Typography>

          <DialogActions>
            <Button color="primary" type="submit" onClick={handleSubmit}>
              Add Card
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Paper>
  );
};

export default Payment;
