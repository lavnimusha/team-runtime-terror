import { Typography, Box } from '@material-ui/core';
import useStyles from './useStyles';

interface Props {
  brand: string;
  last4: number;
  expMonth: number;
  expYear: number;
}

const PaymentReUse = ({ brand, last4, expMonth, expYear }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.cardImage}>
        {brand == 'visa' ? (
          <i className="fab fa-cc-visa fa-5x visaCard"></i>
        ) : (
          <i className="fab fa-cc-mastercard fa-5x"></i>
        )}
      </Box>
      <Typography className={classes.successText}>**** **** **** {last4}</Typography>
      <Typography className={classes.successText}>
        Exp. Date {expMonth}/{expYear}
      </Typography>
    </>
  );
};

export default PaymentReUse;
