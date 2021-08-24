import { useState } from 'react';
import useStyles from './useStyles';
// the following images will be replaced with card snapshots
import image1 from '../../../Images/credit-card-1369111_1280.png';
import image2 from '../../../Images/credit-cards-1583534_1920.jpg';
import {
  Button,
  Card,
  Typography,
  TextField,
  CardActions,
  Paper,
  Grid,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';

const Payment = (): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      //make post request and save card details
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <Grid container className={classes.customerCard}>
          <Grid item sm={6}>
            <Paper elevation={1} className={classes.customerSingleCard}>
              <img src={image1} className={classes.paymentImage} />
            </Paper>
          </Grid>
          <Grid item sm={6}>
            <Paper elevation={1} className={classes.customerSingleCard}>
              <img src={image2} className={classes.paymentImage} />
            </Paper>
          </Grid>
        </Grid>
        <CardActions>
          <form action="/" method="POST" className={classes.form} onSubmit={handleSubmit}>
            <Button
              type="submit"
              variant="outlined"
              onClick={handleClickOpen}
              fullWidth
              className={classes.photoButton}
              classes={{
                root: classes.buttonRoot,
              }}
            >
              Add new payment profile
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Credit Card Details</DialogTitle>
              <DialogContent>
                <DialogContentText>Please enter your credit card details:</DialogContentText>
                <TextField margin="dense" label="Card Number" type="number" fullWidth />
                <DialogContentText className={classes.expirationDate}>Expiration Date</DialogContentText>
                <TextField margin="dense" label="Month" type="number" className={classes.textField} />
                <TextField margin="dense" label="Year" type="number" className={classes.textField} />
                <TextField
                  margin="dense"
                  id="name"
                  label="Security Code"
                  type="number"
                  fullWidth
                  placeholder="Enter 3 digits"
                />
                <TextField margin="dense" label="Name on Card" type="text" fullWidth />
                <TextField margin="dense" label="ZIP/Postal Code" type="text" fullWidth />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Submit
                </Button>
                <Button onClick={handleClose} color="primary">
                  Cancle
                </Button>
              </DialogActions>
            </Dialog>
          </form>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default Payment;
